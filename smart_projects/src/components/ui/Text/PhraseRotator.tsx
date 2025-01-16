import { useState, useEffect } from 'react';

import { Typography, useMediaQuery, useTheme } from '@mui/material';

import { usePhrases } from '../../../hooks/usePhrases';

import { phraseRotatorStyles } from './PhraseRotator.styles';

export const PhraseRotator = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const phrases = usePhrases();
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <Typography
      variant={isSmallScreen ? 'h4' : 'h3'}
      sx={phraseRotatorStyles.phrase}
      aria-live="polite"
      aria-atomic="true"
      aria-labelledby="phrase-rotator"
    >
      <span id="phrase-rotator">
        SmartProjects – {phrases[currentPhraseIndex]}
      </span>
    </Typography>
  );
};
