import React from 'react';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../theme';
import { SxProps } from '@mui/material';
import { SVGWrapper, SVGPath, SVGCircle } from './StyledSVGComponents';

interface ExploreIconProps {
  size?: number;
  sx?: SxProps;
  disabled?: boolean;
}

const ExploreIcon: React.FC<ExploreIconProps> = ({ sx, size = 30 }) => {
  return (
    <SVGWrapper size={size} viewBox='0 0 40 40' sx={sx}>
      <g>
        <SVGCircle
          sx={{ fill: SECONDARY_COLOR }}
          cx='20.71'
          cy='19.5'
          r='17.86'
        />
        <SVGPath
          sx={{ fill: PRIMARY_COLOR }}
          d='M19.9,0.62C9.12,0.62,0.36,9.38,0.36,20.15c0,10.77,8.76,19.54,19.54,19.54c10.77,0,19.54-8.76,19.54-19.54
		C39.43,9.38,30.67,0.62,19.9,0.62z M27.62,16.3c-0.17-0.42-0.38-0.82-0.62-1.18c-0.65-0.96-1.93-2.24-4.39-2.9
		c-1.28-0.34-2.61-0.37-3.96-0.1l-0.84-4.1c1.99-0.41,3.97-0.36,5.88,0.15c3.71,0.99,5.73,3.05,6.78,4.6
		c0.42,0.62,0.77,1.28,1.04,1.98L27.62,16.3z'
        />
      </g>
    </SVGWrapper>
  );
};

export default ExploreIcon;
