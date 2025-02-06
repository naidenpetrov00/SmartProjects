import { SxProps } from '@mui/material';

interface ChatTooglerStyles {
  container: SxProps;
  checkOurChatMessageContainer: SxProps;
}

export const chatTooglerStyles: ChatTooglerStyles = {
  container: {
    position: 'fixed',
    bottom: 32,
    right: 32,
  },
  checkOurChatMessageContainer: {
    width: 200,
    position: 'absolute',
    bottom: 56,
    right: 0,
    bgcolor: 'secondary.main',
    color: 'white',
    p: 1,
    borderRadius: 1,
    boxShadow: 3,
    fontSize: '0.875rem',
    zIndex: 10,
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '100%',
      right: '12px',
      width: 0,
      height: 0,
      borderLeft: '8px solid transparent',
      borderRight: '8px solid transparent',
      borderTop: '8px solid',
      borderTopColor: 'secondary.main',
    },
  },
};
