import {
  useMediaQuery,
  Dialog,
  useTheme,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Zoom,
  Box,
  Button,
  Fade,
  Paper,
  Stack,
} from '@mui/material';
import TrapFocus from '@mui/material/Unstable_TrapFocus';
import CloseIcon from '@mui/icons-material/Close';
import { Dispatch, SetStateAction, useState } from 'react';
import {
  ChatContainer,
  MainContainer,
  Message,
  MessageInput,
  MessageInputProps,
  MessageList,
  MessageModel,
} from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

interface ChatProps {
  showChat: boolean;
  setShowChat: Dispatch<SetStateAction<boolean>>;
}

export const Chat = ({ showChat, setShowChat }: ChatProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [messages, setMessages] = useState<MessageModel[]>([
    {
      message: 'Hello how can i assist you today',
      sender: 'ChatGPT',
      sentTime: '15 mins ago',
      direction: 'incoming',
      position: 'single',
    },
  ]);

  const handleClose = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowChat(false);
  };
  const handleSend: MessageInputProps['onSend'] = async (message) => {
    // const message:MessageModel ={message}
    // setMessages({});
    console.log(message);
  };

  return (
    <Dialog
      hideBackdrop
      disableScrollLock
      disableEnforceFocus
      style={{ pointerEvents: 'none' }}
      PaperProps={{ style: { pointerEvents: 'auto' } }}
      TransitionComponent={Zoom}
      open={showChat} // onClose={handleCloseChat}
      fullWidth
      maxWidth="sm"
      sx={{ '& .MuiDialog-paperScrollPaper': { height: 560 } }}
      fullScreen={isSmallScreen}
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Sound
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
      {/* <DialogTitle>AI Assistant</DialogTitle> */}
      <MainContainer>
        <ChatContainer>
          <MessageList>
            {messages.map((message, index) => (
              <Message key={index} model={message} />
            ))}
          </MessageList>
          <MessageInput placeholder="Type Message Here" onSend={handleSend} />
        </ChatContainer>
      </MainContainer>
    </Dialog>
  );
};
