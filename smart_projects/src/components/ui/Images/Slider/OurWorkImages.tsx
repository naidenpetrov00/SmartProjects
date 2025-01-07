import { Grid2 as Grid } from '@mui/material';
import { Slider } from './Slider';

interface GetPlaces {
  [key: string]: () => [string];
}

const places: GetPlaces = {
  Gard: () => {
    //@ts-ignore
    const context = require.context(
      '../../../../assets/images/places/Gard',
      false,
      /\.(png|jpe?g|svg|webp)$/,
    );
    const images = context.keys().map(context);
    return images;
  },
  Gost: () => {
    //@ts-ignore
    const context = require.context(
      '../../../../assets/images/places/Gost/',
      false,
      /\.(png|jpe?g|svg|webp)$/,
    );
    const images = context.keys().map(context);
    return images;
  },
  Gostinyata: () => {
    //@ts-ignore
    const context = require.context(
      '../../../../assets/images/places/Gostinyata/',
      false,
      /\.(png|jpe?g|svg|webp)$/,
    );
    const images = context.keys().map(context);
    return images;
  },
  San: () => {
    //@ts-ignore
    const context = require.context(
      '../../../../assets/images/places/San/',
      false,
      /\.(png|jpe?g|svg|webp)$/,
    );
    const images = context.keys().map(context);
    return images;
  },
  Spa: () => {
    //@ts-ignore
    const context = require.context(
      '../../../../assets/images/places/Spa/',
      false,
      /\.(png|jpe?g|svg|webp)$/,
    );
    const images = context.keys().map(context);
    return images;
  },
};

export const OurWorkImages = ({ homePage = false }: { homePage?: boolean }) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 2, sm: 8 }}
      sx={{ ml: 2, mr: 2, mt: 2, mb: 2 }}
    >
      {Object.entries(places)
        .slice(0, homePage ? 2 : undefined)
        .map(([folder, images]) => (
          <Grid size={{ xs: 2, sm: 4, md: 4 }} key={folder}>
            <Slider images={images()} />
          </Grid>
        ))}
    </Grid>
  );
};
