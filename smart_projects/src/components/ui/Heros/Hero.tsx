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
            <Typography
              variant="h2"
              sx={heroStyles.titleWhite(isSmallScreen)}
              aria-label="Title in white"
            >
              {titleWhite}&nbsp;
            </Typography>
            <Typography
              variant="h2"
              sx={heroStyles.titleBlack(theme, isSmallScreen)}
              aria-label="Title in black"
            >
              {titleBlack}
            </Typography>
          </Stack>
          <Typography
            sx={heroStyles.description}
            aria-describedby="hero-description"
          >
            {description}
          </Typography>
        </Stack>
      </Container>
      {divider && <Divider aria-hidden="true" />}
    </React.Fragment>
  );
};
