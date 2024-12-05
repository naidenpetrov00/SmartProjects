import { useState, useEffect } from 'react';

import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { phraseRotatorStyles } from './PhraseRotator.styles';

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
      variant={isSmallScreen ? 'h4' : 'h3'}
      sx={phraseRotatorStyles.phrase}
    >
      SmartProjects – {phrases[currentPhraseIndex]}
    </Typography>
  );
};
