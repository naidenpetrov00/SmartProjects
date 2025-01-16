import { Grid2 as Grid } from '@mui/material';

import { Slider } from './Slider';
import { usePlaces } from '../../../hooks/usePlaces';

export const OurWorkImages = ({ homePage = false }: { homePage?: boolean }) => {
  const places = usePlaces();
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 2, sm: 8 }}
      sx={{ ml: 2, mr: 2, mt: 2, mb: 2 }}
    >
      {Object.entries(places)
        .slice(0, homePage ? 2 : undefined)
        .map(([folder, place]) => (
          <Grid size={{ xs: 2, sm: 4, md: 4 }} key={folder}>
            <Slider place={place} />
          </Grid>
        ))}
    </Grid>
  );
};
