import { useTranslation } from 'react-i18next';

import { Box } from '@mui/material';

import { Hero } from '../../components/ui/Heros/Hero';
import { OurWorkImages } from '../../components/Images/Slider/OurWorkImages';

export const OurWorkPage = () => {
  const { t } = useTranslation();

  return (
    <Box component="section" aria-labelledby="our-work-section">
      <Hero
        titleWhite={t('titles.ourWork.white').toString()}
        titleBlack={t('titles.ourWork.black').toString()}
        description={t('descriptions.ourWork').toString()}
        aria-labelledby="hero-description"
      />
      <OurWorkImages />
    </Box>
  );
};
