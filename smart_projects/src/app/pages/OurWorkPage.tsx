import { Box, Container, Divider, Stack, Typography } from '@mui/material';

import { MasonryImageList } from '../../components/ui/Images/MasonryImageList';
import { Hero } from '../../components/ui/Heros/Hero';

export const OurWorkPage = () => {
  return (
    <Box>
      <Hero
        titleWhite="Our latest"
        titleBlack="projects"
        description="Explore our latest projects. At SmartProjects, we take pride in
            delivering high-quality apartment renovations. Our expertise spans
            from minor repairs to full-scale transformations, tailored to meet
            the unique needs of every client."
      ></Hero>
      <MasonryImageList />
    </Box>
  );
};
