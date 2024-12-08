import { Box, Grid2 as Grid } from '@mui/material';

import { Hero } from '../../components/ui/Heros/Hero';
import Slider from '../../components/ui/Images/Slider';
import ImagesWithTitleBar from '../../components/ui/Images/ImagesWithTitleBar';
import { MasonryImageList } from '../../components/ui/Images/MasonryImageList';

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
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8 }}
        sx={{ ml: 2, mr: 2, mt: 2 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
            <Slider />
          </Grid>
        ))}
      </Grid>
      <ImagesWithTitleBar />
      <MasonryImageList />
    </Box>
  );
};
