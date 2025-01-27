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
        aria-labelledby="our-services-hero"
      />
      <Box
        sx={ourServicesStyles.container}
        role="region"
        aria-labelledby="our-services-accordion"
      >
        {Object.entries(typesOfWork).map((work, index) => (
          <Accordion
            key={work[1].title}
            defaultExpanded={index === 0}
            sx={ourServicesStyles.accordion(theme)}
            aria-labelledby={`accordion-${index}`}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: theme.palette.text.primary }} />
              }
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography
                color="textPrimary"
                variant="h4"
                sx={{ fontSize: '1.25rem' }}
              >
                {work[1].title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={ourServicesStyles.accordionDetails(theme)}>
              {work[1].details.map((d, detailIndex) => (
                <Typography key={detailIndex} color="textPrimary">
                  {d}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </React.Fragment>
  );
};
