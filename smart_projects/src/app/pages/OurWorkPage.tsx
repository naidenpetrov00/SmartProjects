import { Box, Grid2 as Grid } from '@mui/material';

import { Hero } from '../../components/ui/Heros/Hero';
import { Slider } from '../../components/ui/Images/Slider/Slider';

const titleWhite = 'Our latest';
const titleBlack = 'projects';
const description = `Explore our latest projects. At SmartProjects, we take pride in
delivering high-quality apartment renovations. Our expertise spans
from minor repairs to full-scale transformations, tailored to meet
the unique needs of every client.`;

interface GetImages {
  [key: string]: () => [string];
}

const getImages: GetImages = {
  Gard: () => {
    //@ts-ignore
    const context = require.context(
      `../../assets/images/places/Gard/`,
      false,
      /\.(png|jpe?g|svg|webp)$/,
    );
    const images = context.keys().map(context);
    return images;
  },
  Gost: () => {
    //@ts-ignore
    const context = require.context(
      `../../assets/images/places/Gost/`,
      false,
      /\.(png|jpe?g|svg|webp)$/,
    );
    const images = context.keys().map(context);
    return images;
  },
  Gostinyata: () => {
    //@ts-ignore
    const context = require.context(
      `../../assets/images/places/Gostinyata/`,
      false,
      /\.(png|jpe?g|svg|webp)$/,
    );
    const images = context.keys().map(context);
    return images;
  },
  San: () => {
    //@ts-ignore
    const context = require.context(
      `../../assets/images/places/San/`,
      false,
      /\.(png|jpe?g|svg|webp)$/,
    );
    const images = context.keys().map(context);
    return images;
  },
  Spa: () => {
    //@ts-ignore
    const context = require.context(
      `../../assets/images/places/Spa/`,
      false,
      /\.(png|jpe?g|svg|webp)$/,
    );
    const images = context.keys().map(context);
    return images;
  },
};

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

export const OurWorkImages = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 2, sm: 8 }}
      sx={{ ml: 2, mr: 2, mt: 2, mb: 2 }}
    >
      {Object.entries(getImages).map(([folder, images]) => (
        <Grid size={{ xs: 2, sm: 4, md: 4 }}>
          <Slider images={images()} />
        </Grid>
      ))}
    </Grid>
  );
};
