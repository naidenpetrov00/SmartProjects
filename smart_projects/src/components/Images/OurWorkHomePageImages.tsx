import React from 'react';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@mui/material';

import { Hero } from '../ui/Heros/Hero';
import { OurWorkImages } from './Slider/OurWorkImages';

import { paths } from '../../config/paths';
import { LinkButton } from '../ui/Buttons/LinkButton/LinkButton';

export const OurWorkHomePageImages = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Hero
        titleWhite={t('titles.ourWork.white').toString()}
        titleBlack={t('titles.ourWork.black').toString()}
        divider={false}
        aria-label={t('titles.ourWork.white')}
      />
      <OurWorkImages homePage={true} />
      <LinkButton
        backgroundColor={theme.palette.secondary.main}
        to={paths.ourWork.path}
        aria-label={t('buttons.checkMore')}
      >
        {t('buttons.checkMore')}
      </LinkButton>
    </React.Fragment>
  );
};
