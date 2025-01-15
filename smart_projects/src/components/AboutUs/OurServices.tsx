import React from 'react';

import {
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Hero } from '../ui/Heros/Hero';
import { AboutUsText } from './AboutUsText';

import { SvgIconWhiteFont } from '../../assets/images/logo/SvgIconWhiteFont';

import { ourServicesStyles } from './OurServices.styles';
import { useTranslation } from 'react-i18next';
import { useTypesOfWork } from '../../hooks/useTypesOfWork';

export const OurServices = () => {
  const { t } = useTranslation();
  const typesOfWork = useTypesOfWork();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <React.Fragment>
      <Box sx={ourServicesStyles.logoContainer}>
        <SvgIconWhiteFont width={isSmallScreen ? '300' : '600'} />
        <AboutUsText />
      </Box>
      <Hero
        titleWhite={t('titles.ourServices.white').toString()}
        titleBlack={t('titles.ourServices.black').toString()}
        divider={false}
      ></Hero>
      <Box sx={ourServicesStyles.container}>
        {Object.entries(typesOfWork).map((work, index) => {
          console.log(index);
          return (
            <Accordion
              key={work[1].title}
              defaultExpanded={index === 0}
              sx={ourServicesStyles.accordion(theme)}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color="textSecondary">{work[1].title}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={ourServicesStyles.accordionDetails(theme)}>
                {work[1].details.map((d) => (
                  <Typography color="textSecondary">{d}</Typography>
                ))}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </React.Fragment>
  );
};
