import { Box } from '@mui/material';

import { Footer } from '../../ui/Footer/Footer';
import { Header } from '../../ui/Header';
import { ScrollTop } from '../../ui/Buttons/ScrollTop';
import { ToolBarOffset } from '../../ui/Offsets';

import { pageLayoutStyles } from './PageLayout.styles';

type PageLayoutProprs = {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: PageLayoutProprs) => {
  return (
    <Box sx={pageLayoutStyles.container}>
      <Header />
      <ToolBarOffset id="back-to-top-anchor" />
      <Box sx={pageLayoutStyles.content}>
        <main>{children}</main>
      </Box>
      <ScrollTop />
      <Footer />
    </Box>
  );
};
