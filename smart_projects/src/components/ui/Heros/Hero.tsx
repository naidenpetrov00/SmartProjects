import React from 'react';

import { Container, Stack, Typography, Divider, useTheme } from '@mui/material';

import { heroStyles } from './Hero.styles';

interface HeroProps {
  titleWhite: String;
  titleBlack: String;
  description?: String;
}

export const Hero = ({ titleWhite, titleBlack, description }: HeroProps) => {
  // export const Hero = () => {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Container sx={heroStyles.container}>
        <Stack spacing={2} useFlexGap sx={heroStyles.stack}>
          <Typography variant="h1" sx={heroStyles.title}>
            {titleWhite}&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={heroStyles.titleBlack(theme)}
            >
              {titleBlack}
            </Typography>
          </Typography>
          <Typography sx={heroStyles.description}>{description}</Typography>
        </Stack>
      </Container>
      <Divider></Divider>
    </React.Fragment>
  );
};
