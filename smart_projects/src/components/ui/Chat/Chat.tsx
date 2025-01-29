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
import {
  Dispatch,
  forwardRef,
  MutableRefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  ChatContainer,
  MainContainer,
  Message,
  MessageInput,
  MessageInputProps,
  MessageList,
  MessageModel,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

interface ChatProps {
  showChat: boolean;
  setShowChat: Dispatch<SetStateAction<boolean>>;
  // messageListRef: MutableRefObject<any>;
}

export const Chat = ({ showChat, setShowChat }: ChatProps) => {
  const [chatGptIsTyping, setchatGptIsTyping] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const messageListRef = useRef<any>(null);

  const scroll = useCallback(() => {
    setTimeout(() => {
      messageListRef.current?.scrollToBottom();
    }, 200);
  }, []);
  if (showChat) {
    scroll();
  }

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
    messageListRef.current?.scrollToBottom();
    console.log(messageListRef.current);

    const messageData: MessageModel = {
      sender: 'user',
      direction: 'outgoing',
      position: 'single',
      message,
    };
    setMessages((state) => [...state, messageData]);

    setchatGptIsTyping(true);
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
      fullScreen={isSmallScreen}
      fullWidth
      maxWidth="sm"
      sx={
        isSmallScreen
          ? {
              // '& .MuiDialog-paperScrollPaper': { height: '90%' },
            }
          : {
              '& .MuiDialog-paperScrollPaper': {
                width: 400,
                height: 560,
                position: 'absolute',
                right: 0,
                bottom: 0,
              },
            }
      }
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
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
      <MainContainer>
        <ChatContainer>
          <MessageList
            typingIndicator={
              chatGptIsTyping ? (
                <TypingIndicator content="Let me think" />
              ) : null
            }
            ref={messageListRef}
          >
            {messages.map((message, index) => (
              <Message key={index} model={message} />
            ))}
          </MessageList>
          <MessageInput
            placeholder="Type Message Here"
            onSend={handleSend}
            style={{ fontSize: '17px' }}
          />
        </ChatContainer>
      </MainContainer>
    </Dialog>
  );
};
