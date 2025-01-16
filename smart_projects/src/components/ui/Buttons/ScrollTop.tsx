import { useScrollTrigger, Fade, Box, Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const ScrollTop = () => {
  const trigger = useScrollTrigger({ disableHysteresis: true });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="button"
        aria-label="Scroll back to top"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <Fab
          size="small"
          aria-label="scroll back to top"
          title="Scroll to the top of the page"
          color="secondary"
        >
          <KeyboardArrowUpIcon color="inherit" />
        </Fab>
      </Box>
    </Fade>
  );
};
