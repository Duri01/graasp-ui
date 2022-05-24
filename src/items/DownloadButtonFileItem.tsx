import React, { FC } from 'react';
import GetAppIcon from '@mui/icons-material/GetApp';
import { makeStyles } from '@mui/styles';
import Button from '../Button';

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
  },
}));

interface DownloadButtonFileItemProps {
  name?: string;
  url: string;
  id?: string;
  text?: string;
}

const DownloadButtonFileItem: FC<DownloadButtonFileItemProps> = ({
  id,
  name = 'File',
  url,
  text,
}) => {
  const classes = useStyles();
  const buttonText = text || `Download ${name}`;

  return (
    <a
      id={id}
      className={classes.link}
      href={url}
      target='_blank'
      rel='noreferrer'
      download={name}
    >
      <Button size='large' startIcon={<GetAppIcon />}>
        {buttonText}
      </Button>
    </a>
  );
};

export default DownloadButtonFileItem;
