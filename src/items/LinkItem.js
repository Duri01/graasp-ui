import React, { useState } from 'react';
import { IconButton, makeStyles } from '@material-ui/core';
import { getEmbeddedLinkExtra } from '../utils/itemExtra';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import withCaption from './withCaption';

const useStyles = makeStyles(() => ({
  iframe: {
    width: '100%',
    border: 'none',
  },
  linkButtonContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: 'rgba(62,62,62,0.55)',
  },
  linkButton: {
    padding: 2,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  linkButtonIcon: {
    color: 'white',
    fontSize: 46,
  },
}));

const LinkItem = ({
  item,
  height,
  onSaveCaption,
  editCaption,
  showCaption,
  saveButtonId,
}) => {
  const classes = useStyles();

  const [loaded, setLoaded] = useState(false);

  const id = item.get('id');
  const extra = getEmbeddedLinkExtra(item.get('extra'));

  const CaptionWrapper = withCaption({
    item,
    onSave: onSaveCaption,
    saveButtonId,
    edit: editCaption,
  });

  // if available, display specific player
  const html = extra?.html;
  if (html) {
    // eslint-disable-next-line react/no-danger
    const component = (
      <div id={id} dangerouslySetInnerHTML={{ __html: html }} />
    );
    if (showCaption) {
      return CaptionWrapper(component);
    }
    return component;
  }

  // default case is an iframe with given link
  const url = extra?.url;
  const name = item.get('name');

  const handleLoad = () => {
    setLoaded(true);
  };

  const component = (
    <React.Fragment>
      <div
        hidden={loaded}
        style={{ position: 'relative', height: height || '100%' }}
      >
        Link is Loading.
        <a href={url}> Click here to open link manually.</a>
      </div>
      <div
        hidden={!loaded}
        style={{ position: 'relative', height: height || '100%' }}
      >
        <iframe
          id={id}
          className={classes.iframe}
          title={name}
          src={url}
          onLoad={handleLoad}
          height='100%'
        />
        <div className={classes.linkButtonContainer}>
          <IconButton className={classes.linkButton}>
            <a href={url} target='_blank' rel='noreferrer'>
              <OpenInNewIcon className={classes.linkButtonIcon} />
            </a>
          </IconButton>
        </div>
      </div>
    </React.Fragment>
  );

  if (showCaption) {
    return CaptionWrapper(component);
  }

  return component;
};

LinkItem.defaultProps = {
  height: '100%',
  onSaveCaption: null,
  editCaption: false,
  showCaption: true,
  saveButtonId: null,
};

export default LinkItem;
