import { SxProps } from '@mui/material';

interface ChatContainerStyles {
  dialog: (isSmallScreen: boolean) => SxProps;
  appBar: SxProps;
  appBarTitle: SxProps;
}

export const chatContainerStyles: ChatContainerStyles = {
  dialog: (isSmallScreen: boolean): SxProps =>
    isSmallScreen
      ? {}
      : {
          '& .MuiDialog-paperScrollPaper': {
            width: 400,
            height: 560,
            position: 'absolute',
            right: 0,
            bottom: 0,
            borderRadius: 3,
          },
        },
  appBar: { position: 'relative' },
  appBarTitle: { ml: 2, flex: 1 },
};
