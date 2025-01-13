import React from 'react';

import { useTheme } from '@mui/material';

import { Hero } from '../ui/Heros/Hero';
import { LinkButton } from '../ui/Buttons/LinkButton';
import { OurWorkImages } from './Slider/OurWorkImages';

import { paths } from '../../config/paths';

const titleWhite = 'Our latest';
const titleBlack = 'projects';

export const OurWorkHomePageImages = () => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Hero
        titleWhite={titleWhite}
        titleBlack={titleBlack}
        divider={false}
      ></Hero>
      <OurWorkImages homePage={true} />
      <LinkButton
        backgoundColor={theme.palette.secondary.main}
        to={paths.ourWork.path}
      >
        CHECK MORE
      </LinkButton>
    </React.Fragment>
  );
};
