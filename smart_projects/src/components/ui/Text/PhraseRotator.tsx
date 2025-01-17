import { useState, useEffect } from 'react';

import { Typography } from '@mui/material';

import { usePhrases } from '../../../hooks/usePhrases';

import { phraseRotatorStyles } from './PhraseRotator.styles';

export const PhraseRotator = () => {

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
      variant={'h1'}
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
