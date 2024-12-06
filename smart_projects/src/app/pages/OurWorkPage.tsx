import { Box } from '@mui/material';

import { Hero } from '../../components/ui/Heros/Hero';
import { MasonryImageList } from '../../components/ui/Images/MasonryImageList';
import ImagesWithTitleBar from '../../components/ui/Images/ImagesWithTitleBar';

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
      <ImagesWithTitleBar />
      <MasonryImageList />
    </Box>
  );
};
