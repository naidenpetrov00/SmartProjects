import { Fragment } from 'react/jsx-runtime';

import { Box, Stack, Typography } from '@mui/material';

import { PhraseRotator } from '../../components/ui/Text/PhraseRotator';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import homePhoto from '../../assets/images/home/homePageBuildings.jpg';
import homePhotoPlaceHolder from '../../assets/images/home/homePageBuildingsPlaceHolder10.jpg';

export const HomePage = () => {
  console.log('home renders');

  return (
    <Stack direction={'column'}>
      <Box
        sx={{
          zIndex: -1,
          height: '100vh',
          // width: '95vw',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          overflow: 'hidden',
        }}
      >
        <LazyLoadImage
          src={homePhoto}
          placeholderSrc={homePhotoPlaceHolder}
          alt="Home Background"
          effect="opacity"
          width="100%"
          height="100%"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: -1,
            objectFit: 'cover',
          }}
        />
        <PhraseRotator />
      </Box>
    </Stack>
  );
};
