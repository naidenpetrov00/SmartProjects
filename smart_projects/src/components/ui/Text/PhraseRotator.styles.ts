import { SxProps } from '@mui/material';

interface PhraseRotatorStyles {
  phrase: SxProps;
}

export const phraseRotatorStyles: PhraseRotatorStyles = {
  phrase: {
    position: 'absolute',
    width: '90vw',
    top: {
      xs: '40%',
      md: '40%',
    },
    left: '5%',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 1)',
  },
};
