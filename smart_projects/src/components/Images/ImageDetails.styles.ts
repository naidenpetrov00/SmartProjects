import { SxProps } from '@mui/material';

interface ImageDetailsStyles {
  container: SxProps;
  titleContainer: SxProps;
  iconButton: SxProps;
}

export const imageDetailsStyles: ImageDetailsStyles = {
  container: {
    borderRadius: 4,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    display: 'flex',
    zIndex: 1,
    textAlign: 'start',
  },
  titleContainer: {
    pl: 2,
    pt: 2,
    overflowY: 'auto',
    maxHeight: '90%',
    '&::-webkit-scrollbar': { display: 'none' },
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
  },
  iconButton: {
    position: 'absolute',
    bottom: 1,
    right: 1,
    color: 'rgba(255, 255, 255, 0.54)',
  },
};
