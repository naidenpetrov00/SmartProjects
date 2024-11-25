import { Footer } from '../ui/Footer';
import { Header } from '../ui/Header';
import { ScrollTop } from '../ui/ScrollTop';
import { ToolBarOffset } from '../ui/Offsets';
import { Box } from '@mui/material';

type PageLayoutProprs = {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: PageLayoutProprs) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <ToolBarOffset id="back-to-top-anchor" />
      <Box sx={{ flexGrow: 1 }}>
        <main>{children}</main>
      </Box>
      <ScrollTop />
      <Footer />
    </Box>
  );
};
