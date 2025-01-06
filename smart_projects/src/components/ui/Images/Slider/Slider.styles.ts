import { SxProps } from '@mui/material';

interface SliderStyles {
  container: SxProps;
  imageListItem: SxProps;
  image: React.CSSProperties;
  imageItemBar: SxProps;
  iconButton: SxProps;
  infoIcon: SxProps;
}

export const sliderStyles: SliderStyles = {
  container: {
    height: '380px',
  },
  imageListItem: {
    height: '350px !important',
  },
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
