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
    height: '450px',
  },
  imageListItem: {
    height: '400px !important',
  },
  image: {
    borderRadius: '16px',
    display: 'block',
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
