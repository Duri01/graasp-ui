import React, { FC, useEffect, useState } from 'react';
import Alert from '@material-ui/lab/Alert';
import { Record } from 'immutable';
import { MIME_TYPES, UNEXPECTED_ERROR_MESSAGE } from '../constants';
import FileImage from './FileImage';
import FileAudio from './FileAudio';
import FileVideo from './FileVideo';
import FilePdf from './FilePdf';
import { getFileExtra, getS3FileExtra } from '../utils/itemExtra';
import DownloadButtonFileItem from './DownloadButtonFileItem';
import withCaption from './withCaption';
import { FileItemExtra, Item, S3FileItemExtra, UnknownExtra } from '../types';

interface FileItemProps {
  item: Record<Item<UnknownExtra>>;
  content: Blob;
  id?: string;
  defaultItem?: JSX.Element;
  downloadText?: string;
  maxHeight?: number;
  onSaveCaption?: (text: string) => void;
  editCaption?: boolean;
  showCaption?: boolean;
  errorMessage?: string;
  saveButtonId?: string;
}

const FileItem: FC<FileItemProps> = ({
  id,
  item,
  content,
  defaultItem,
  downloadText,
  maxHeight = '100%',
  onSaveCaption,
  editCaption = false,
  showCaption = true,
  saveButtonId,
  errorMessage = UNEXPECTED_ERROR_MESSAGE,
}) => {
  const [url, setUrl] = useState<string>();
  const extra =
    getFileExtra(item.get('extra') as FileItemExtra) ??
    getS3FileExtra(item.get('extra') as S3FileItemExtra);
  const { mimetype, name: originalFileName } = extra ?? {};
  const name = item.get('name');

  useEffect(() => {
    (async () => {
      if (content) {
        // Build a URL from the file
        const fileURL = URL.createObjectURL(content);
        setUrl(fileURL);
      }

      return () => {
        if (url) {
          URL.revokeObjectURL(url);
        }
      };
    })();
    // does not include url to avoid infinite loop
  }, [content]);

  if (!url) {
    return <Alert severity='error'>{errorMessage}</Alert>;
  }

  let component;
  if (mimetype) {
    if (MIME_TYPES.IMAGE.includes(mimetype)) {
      component = <FileImage id={id} url={url} alt={name} />;
    } else if (MIME_TYPES.AUDIO.includes(mimetype)) {
      component = <FileAudio id={id} url={url} type={mimetype} />;
    } else if (MIME_TYPES.VIDEO.includes(mimetype)) {
      component = <FileVideo id={id} url={url} type={mimetype} />;
    } else if (MIME_TYPES.PDF.includes(mimetype)) {
      component = <FilePdf id={id} url={url} height={maxHeight} />;
    }
  }

  // todo: add more file extensions

  if (component) {
    // display element with caption
    if (showCaption) {
      return withCaption({
        item,
        onSave: onSaveCaption,
        edit: editCaption,
        saveButtonId,
      })(component);
    }

    return component;
  }

  if (defaultItem) {
    return defaultItem;
  }

  return (
    <DownloadButtonFileItem
      id={id}
      name={originalFileName}
      url={url}
      text={downloadText}
    />
  );
};

export default FileItem;