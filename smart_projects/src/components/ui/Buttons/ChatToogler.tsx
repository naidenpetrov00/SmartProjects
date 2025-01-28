import { useState } from 'react';
import {
  useScrollTrigger,
  Box,
  Fab,
  Typography,
  Fade,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import AssistantIcon from '@mui/icons-material/Assistant';
import { Chat } from '../Chat/Chat';

export const ChatToggler = () => {
  const trigger = useScrollTrigger({ disableHysteresis: true });
  const [showTooltip, setShowTooltip] = useState(true);
  const [showChat, setShowChat] = useState(false);

  const handleClick = () => {
    // setShowTooltip((state) => !state);
    if (!showChat) {
      setShowChat(true);
    }
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        position: 'fixed',
        bottom: 32,
        right: 32,
      }}
    >
      {showTooltip && (
        <Fade in={!trigger}>
          <Box
            sx={{
              width: 200,
              position: 'absolute',
              bottom: 56, // Adjust above the button
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
            }}
          >
            Check out our AI Assistant!
          </Box>
        </Fade>
      )}

      <Fab
        size="small"
        aria-label="scroll back to top"
        title="Check out our AI Assistant"
        color="secondary"
      >
        <AssistantIcon color="inherit" />
      </Fab>
      <Chat showChat={showChat} setShowChat={setShowChat} />
    </Box>
  );
};

