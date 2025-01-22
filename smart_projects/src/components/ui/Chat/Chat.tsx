import {
  useMediaQuery,
  Dialog,
  useTheme,
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Dispatch, SetStateAction } from 'react';

interface ChatProps {
  showChat: boolean;
  setShowChat: Dispatch<SetStateAction<boolean>>;
}

export const Chat = ({ showChat, setShowChat }: ChatProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowChat(false);
  };

  return (
    <Dialog
      open={showChat} // onClose={handleCloseChat}
      fullWidth
      maxWidth="sm"
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
      {/* <DialogContent>
       <Typography>How can I assist you today?</Typography>
       <TextField
         fullWidth
         margin="normal"
         label="Type your message"
         variant="outlined"
       />
      </DialogContent>
      <DialogActions>
       <Button color="primary">Close</Button>
       <Button onClick={() => {}} color="secondary" variant="contained">
         Send
       </Button>
      </DialogActions> */}
    </Dialog>
  );
};
