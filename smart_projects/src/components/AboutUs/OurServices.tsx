import { Box, Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import React from "react";
import { typesOfWork } from "../../config/typesOfWork";
import { Hero } from "../ui/Heros/Hero";

const titleWhite = 'Нашите';
const titleBlack = 'услуги';

export const OurServices = (props) => {
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
      <Box
        sx={{
          borderBottomLeftRadius: 16,
        }}
      >
        {typesOfWork.map((service, index) => (
          <Accordion
            key={index}
            defaultExpanded={index === 0}
            sx={{
              mt: 0.5,
              marginLeft: {
                md: 32,
              },
              marginRight: {
                md: 32,
              },
              backgroundColor: props.secondary.main,
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color="textSecondary">{service.title}</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: props.secondary.light,
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
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
