import { SxProps } from '@mui/material';

interface SliderStyles {
  container: (isSmallScreen: boolean) => SxProps;
  imageListItem: (isSmallScreen: boolean) => SxProps;
  image: React.CSSProperties;
  imageItemBar: SxProps;
  iconButton: SxProps;
  infoIcon: SxProps;
}

export const sliderStyles: SliderStyles = {
  container: (isSmallScreen) => ({
    height: isSmallScreen ? '370px' : '530px',
  }),
  imageListItem: (isSmallScreen) => ({
    height: isSmallScreen ? '340px !important' : '500px !important',
  }),
  image: {
    height: '100%',
    width: '100%',
    borderRadius: '16px',
    // display: 'block',
  },
  imageItemBar: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    position: 'relative',
    top: -105,
  },
  iconButton: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  infoIcon: {
    fontSize: '35px',
  },
};
