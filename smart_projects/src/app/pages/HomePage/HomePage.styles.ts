import { SxProps, Theme } from '@mui/material';

interface HomePageStyles {
  container: SxProps<Theme>;
  lazyImage: React.CSSProperties;
}

export const homePageStyles: HomePageStyles = {
  container: {
    zIndex: -1,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    overflow: 'hidden',
  },
  lazyImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: -1,
    objectFit: 'cover',
  },
};
