import { Fragment } from 'react/jsx-runtime';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

import homePhoto from '../../assets/images/home/buildings-6528061_1280.jpg';
import { useEffect, useState } from 'react';

const phrases = [
  'Your Partner in Apartment Renovations',
  'Experts in Home Transformations',
  'Providing Quality Repairs',
  'Modern Upgrades for Every Home',
];

export const HomePage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          height: '70vh',
          width: '100vw',
          backgroundImage: `url(${homePhoto})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'left',
        }}
      >
        <Typography
          variant={isSmallScreen ? 'h5' : 'h3'}
          sx={{
            position: 'absolute',
            width: '100%',
            top: {
              xs: '30%',
              md: '30%',
            },
            left: '5%',
            // transform: 'translateX(-50%)',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 1)',
          }}
        >
          SmartProjects – {phrases[currentPhraseIndex]}
        </Typography>
      </Box>
    </Fragment>
  );
};
