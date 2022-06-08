import React, { FC } from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FolderIcon from '@mui/icons-material/Folder';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LinkIcon from '@mui/icons-material/Link';
import MovieIcon from '@mui/icons-material/Movie';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import ShortcutIcon from '@mui/icons-material/Input';
import AppsIcon from '@mui/icons-material/Apps';
import ArchiveIcon from '@mui/icons-material/Archive';
import { MIME_TYPES, ITEM_ICON_MAX_SIZE } from '../constants';
import {
  getEmbeddedLinkExtra,
  getFileExtra,
  getS3FileExtra,
} from '../utils/itemExtra';
import { ITEM_TYPES } from '../enums';
import {
  EmbeddedLinkItemExtra,
  FileItemExtra,
  S3FileItemExtra,
  UnknownExtra,
} from '../types';
import { StyledImage } from '../StyledComponents/StyledBaseComponents';
import { SxProps } from '@mui/material';


interface ItemIconProps {
  name?: string;
  // todo: check is valid type
  type: string;
  extra?: UnknownExtra;
  color?: string;
  sx?: SxProps;
}

const ItemIcon: FC<ItemIconProps> = ({
  name = '',
  type,
  extra,
  sx,
  color,
}) => {
  const mimetype =
    getFileExtra(extra as unknown as FileItemExtra)?.mimetype ||
    getS3FileExtra(extra as unknown as S3FileItemExtra)?.mimetype;
  const icon = getEmbeddedLinkExtra(extra as unknown as EmbeddedLinkItemExtra)
    ?.icons?.[0];

  if (icon) {
    return (
      <StyledImage
        sx={{
          // icons should be squared
          maxHeight: ITEM_ICON_MAX_SIZE,
          maxWidth: ITEM_ICON_MAX_SIZE,
        }}
        alt={name}
        src={icon}
      />
    );
  }

  let Icon = InsertDriveFileIcon;
  switch (type) {
    case ITEM_TYPES.FOLDER:
      Icon = FolderIcon;
      break;
    case ITEM_TYPES.SHORTCUT:
      Icon = ShortcutIcon;
      break;
    case ITEM_TYPES.DOCUMENT: {
      Icon = DescriptionIcon;
      break;
    }
    case ITEM_TYPES.FILE:
    case ITEM_TYPES.S3_FILE: {
      if (mimetype) {
        if (MIME_TYPES.IMAGE.includes(mimetype)) {
          Icon = ImageIcon;
          break;
        }
        if (MIME_TYPES.VIDEO.includes(mimetype)) {
          Icon = MovieIcon;
          break;
        }
        if (MIME_TYPES.AUDIO.includes(mimetype)) {
          Icon = MusicNoteIcon;
          break;
        }
        if (MIME_TYPES.PDF.includes(mimetype)) {
          Icon = PictureAsPdfIcon;
          break;
        }
        if (MIME_TYPES.ZIP.includes(mimetype)) {
          Icon = ArchiveIcon;
          break;
        }
      }

      Icon = InsertDriveFileIcon;
      break;
    }
    case ITEM_TYPES.LINK: {
      Icon = LinkIcon;
      break;
    }
    case ITEM_TYPES.APP: {
      Icon = AppsIcon;
      break;
    }
    default:
      break;
  }

  return <Icon sx={sx} style={{ color }} />;
};

export default ItemIcon;
