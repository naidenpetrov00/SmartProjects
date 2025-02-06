import { useState } from 'react';

import AssistantIcon from '@mui/icons-material/Assistant';
import { useScrollTrigger, Box, Fab, Fade } from '@mui/material';

import { ChatContainer } from '../../../Chat/ChatContainer';

import { chatTooglerStyles } from './ChatToogler.styles';

export const ChatToggler = () => {
  const trigger = useScrollTrigger({ disableHysteresis: true });

  const [showChat, setShowChat] = useState(false);
  const handleClick = () => {
    if (!showChat) {
      setShowChat(true);
    }
  };

  return (
    <Box onClick={handleClick} sx={chatTooglerStyles.container}>
      <Fade in={!trigger}>
        <Box sx={chatTooglerStyles.checkOurChatMessageContainer}>
          Check out our AI Assistant!
        </Box>
      </Fade>
      <Fab
        size="small"
        aria-label="scroll back to top"
        title="Check out our AI Assistant"
        color="secondary"
      >
        <AssistantIcon color="inherit" />
      </Fab>
      <ChatContainer showChat={showChat} setShowChat={setShowChat} />
    </Box>
  );
};
