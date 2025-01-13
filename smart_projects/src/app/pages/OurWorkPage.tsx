import { Box } from '@mui/material';

import { Hero } from '../../components/ui/Heros/Hero';
import { OurWorkImages } from '../../components/Images/Slider/OurWorkImages';

const titleWhite = 'Our';
const titleBlack = 'projects';
const description = `Explore our latest projects. At SmartProjects, we take pride in
delivering high-quality apartment renovations. Our expertise spans
from minor repairs to full-scale transformations, tailored to meet
the unique needs of every client.`;

export const OurWorkPage = () => {
  return (
    <Box component="section">
      <Hero
        titleWhite={titleWhite}
        titleBlack={titleBlack}
        description={description}
      ></Hero>
      <OurWorkImages />
    </Box>
  );
};
