import { Dispatch, SetStateAction, useState } from 'react';
import { MessageModel } from '@chatscope/chat-ui-kit-react';

import {
  Dialog,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Zoom,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { Chat } from './Chat';

import { chatContainerStyles } from './ChatContainer.styles';

interface ChatContainerProps {
  showChat: boolean;
  setShowChat: Dispatch<SetStateAction<boolean>>;
}
export const ChatContainer = ({
  showChat,
  setShowChat,
}: ChatContainerProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowChat(false);
  };

  const [messages, setMessages] = useState<MessageModel[]>([
    {
      message: 'Hello how can i assist you today',
      sender: 'ChatGPT',
      sentTime: '15 mins ago',
      direction: 'incoming',
      position: 'single',
    },
  ]);

  return (
    <Dialog
      hideBackdrop
      disableScrollLock
      disableEnforceFocus
      style={{ pointerEvents: 'none' }}
      PaperProps={{ style: { pointerEvents: 'auto' } }}
      TransitionComponent={Zoom}
      open={showChat}
      fullScreen={isSmallScreen}
      fullWidth
      maxWidth="sm"
      sx={chatContainerStyles.dialog(isSmallScreen)}
    >
      <AppBar sx={chatContainerStyles.appBar}>
        <Toolbar>
          <Typography
            sx={chatContainerStyles.appBarTitle}
            variant="h6"
            component="div"
          >
            AI Assistant
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Chat showChat={showChat} messages={messages} setMessages={setMessages} />
    </Dialog>
  );
};
