import { Container, Stack, Typography, Divider } from '@mui/material';
import React from 'react';

interface HeroProps {
  titleWhite: String;
  titleBlack: String;
  description: String;
}

export const Hero = ({ titleWhite, titleBlack, description }: HeroProps) => {
  // export const Hero = () => {
  return (
    <React.Fragment>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 4, sm: 8 },
          pb: { xs: 4, sm: 8 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            {titleWhite}&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                color: 'primary.main',
                ...theme.applyStyles('dark', {
                  color: 'primary.light',
                }),
              })}
            >
              {titleBlack}
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            {description}
          </Typography>
        </Stack>
      </Container>
      <Divider></Divider>
    </React.Fragment>
  );
};
