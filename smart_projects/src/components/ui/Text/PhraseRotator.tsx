import { useState, useEffect } from 'react';

import { Typography, useMediaQuery, useTheme } from '@mui/material';

const phrases = [
  'Your Partner in Apartment Renovations',
  'Experts in Home Transformations',
  'Providing Quality Repairs',
  'Modern Upgrades for Every Home',
];

export const PhraseRotator = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  console.log('phrase renders');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Typography
      variant={isSmallScreen ? 'h5' : 'h3'}
      sx={{
        position: 'absolute',
        width: '90vw',
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
  );
};
