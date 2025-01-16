import { Box } from '@mui/material';

import { Header } from '../../ui/Header';
import { Footer } from '../../ui/Footer/Footer';
import { ToolBarOffset } from '../../ui/Offsets';
import { ScrollTop } from '../../ui/Buttons/ScrollTop';

import { pageLayoutStyles } from './PageLayout.styles';

type PageLayoutProps = {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Box sx={pageLayoutStyles.container}>
      <Header />
      <ToolBarOffset id="back-to-top-anchor" />
      <Box sx={pageLayoutStyles.content}>
        <main role="main">{children}</main>
      </Box>
      <ScrollTop />
      <Footer />
    </Box>
  );
};
