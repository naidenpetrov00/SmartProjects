import React from 'react';

import {
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Hero } from '../ui/Heros/Hero';

import { typesOfWork } from '../../config/typesOfWork';
import { ourServicesStyles } from './OurServices.styles';

const titleWhite = 'Нашите';
const titleBlack = 'услуги';

export const OurServices = () => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundColor: 'black',
          width: '200px',
          height: '200px',
        }}
      ></Box>
      <Hero
        titleWhite={titleWhite}
        titleBlack={titleBlack}
        divider={false}
      ></Hero>
      <Box sx={ourServicesStyles.container}>
        {typesOfWork.map((service, index) => (
          <Accordion
            key={index}
            defaultExpanded={index === 0}
            sx={ourServicesStyles.accordion(theme)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color="textSecondary">{service.title}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={ourServicesStyles.accordionDetails(theme)}>
              {service.details.map((d) => (
                <Typography color="textSecondary">{d}</Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </React.Fragment>
  );
};
