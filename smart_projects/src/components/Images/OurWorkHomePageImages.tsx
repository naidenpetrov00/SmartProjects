import React from 'react';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@mui/material';

import { Hero } from '../ui/Heros/Hero';
import { LinkButton } from '../ui/Buttons/LinkButton';
import { OurWorkImages } from './Slider/OurWorkImages';

import { paths } from '../../config/paths';

export const OurWorkHomePageImages = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Hero
        titleWhite={t('titles.ourWork.white').toString()}
        titleBlack={t('titles.ourWork.black').toString()}
        divider={false}
      ></Hero>
      <OurWorkImages homePage={true} />
      <LinkButton
        backgoundColor={theme.palette.secondary.main}
        to={paths.ourWork.path}
      >
        {t('buttons.checkMore')}
      </LinkButton>
    </React.Fragment>
  );
};
