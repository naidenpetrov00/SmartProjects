import React from 'react';

import {
  Container,
  Stack,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import { heroStyles } from './Hero.styles';

interface HeroProps {
  titleWhite: String;
  titleBlack: String;
  description?: String;
  divider?: boolean;
}

export const Hero = ({
  titleWhite,
  titleBlack,
  description,
  divider = true,
}: HeroProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <React.Fragment>
      <Container sx={heroStyles.container}>
        <Stack spacing={2} useFlexGap sx={heroStyles.stack}>
          <Stack
            direction={isSmallScreen ? 'column' : 'row'}
            sx={{ textAlign: 'center' }}
          >
            <Typography variant="h1" sx={heroStyles.titleWhite(isSmallScreen)}>
              {titleWhite}&nbsp;
            </Typography>
            <Typography
              variant="h1"
              sx={heroStyles.titleBlack(theme, isSmallScreen)}
            >
              {titleBlack}
            </Typography>
          </Stack>
          <Typography sx={heroStyles.description}>{description}</Typography>
        </Stack>
      </Container>
      {divider && <Divider></Divider>}
    </React.Fragment>
  );
};
