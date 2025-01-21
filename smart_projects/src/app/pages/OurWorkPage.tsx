import { useTranslation } from 'react-i18next';

import { Box } from '@mui/material';

import { Hero } from '../../components/ui/Heros/Hero';
import { OurWorkImages } from '../../components/Images/Slider/OurWorkImages';
import { Helmet } from 'react-helmet-async';

export const OurWorkPage = () => {
  const { t } = useTranslation();

  return (
    <Box component="section" aria-labelledby="our-work-section">
      <Helmet>
        <title>{t('metatags.ourWorksPage.title')}</title>
        <meta
          name="description"
          content={t('metatags.ourWorksPage.description')!}
        />
        <link rel="canonical" href="https://smart-projects.bg/ourWork" />
      </Helmet>
      <h1 style={{ display: 'none' }}>...............................</h1>
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
