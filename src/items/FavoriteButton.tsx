import React, { FC, MouseEventHandler } from 'react';
import {
  IconButton,
  SvgIconProps,
  Tooltip,
  IconButtonProps,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

export interface FavoriteButtonProps {
  isFavorite: boolean;
  handleUnfavorite: MouseEventHandler;
  handleFavorite: MouseEventHandler;
  size: SvgIconProps['fontSize'];
  color: IconButtonProps['color'];
  className: string;
}

const FavoriteButton: FC<FavoriteButtonProps> = ({
  isFavorite = false,
  handleUnfavorite,
  handleFavorite,
  size = 'large',
  color = 'default',
  className,
}) => {
  const { t } = useTranslation();
  return (
    <Tooltip
      title={isFavorite ? t('Remove from Favorites') : t('Add to Favorites')}
    >
      <IconButton
        aria-label='favorite'
        className={className}
        color={color}
        onClick={isFavorite ? handleUnfavorite : handleFavorite}
      >
        {isFavorite ? (
          <StarIcon fontSize={size} />
        ) : (
          <StarBorderIcon fontSize={size} />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default FavoriteButton;