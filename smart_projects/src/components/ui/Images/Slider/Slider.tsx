import { Slide, SlideProps } from 'react-slideshow-image';

import {
  Fab,
  IconButton,
  ImageListItem,
  ImageListItemBar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import 'react-slideshow-image/dist/styles.css';
import React from 'react';

const properties = {
  easing: 'ease',
  indicators: true,
  prevArrow: (
    <Fab
      size="small"
      aria-label="scroll back to top"
      title="Scroll to the top of the page"
      color="secondary"
      sx={{ ml: 1 }}
    >
      <KeyboardArrowLeftIcon color="inherit" />
    </Fab>
  ),
  nextArrow: (
    <Fab
      size="small"
      aria-label="scroll back to top"
      title="Scroll to the top of the page"
      color="secondary"
      sx={{ mr: 1 }}
    >
      <KeyboardArrowRightIcon color="inherit" />
    </Fab>
  ),
  pauseOnHover: true,
  autoplay: false,
} as SlideProps;

export const Slider = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Slide
      arrows={isSmallScreen ? false : true}
      transitionDuration={isSmallScreen ? 400 : 700}
      {...properties}
    >
      {images.map((slide, index) => {
        return (
          <ImageListItem key={index}>
            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              alt="item images"
              loading="lazy"
              style={{ borderRadius: 16 }}
            />
            <ImageListItemBar
              title="Title"
              subtitle="SubTitle"
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label="Info about Item"
                >
                  <InfoIcon />
                </IconButton>
              }
              sx={{ borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}
            />
          </ImageListItem>
        );
      })}
    </Slide>
  );
};

const images = [
  'https://cdn.pixabay.com/photo/2020/07/06/01/33/forest-5375005_960_720.jpg',
  'https://cdn.pixabay.com/photo/2015/02/24/15/41/wolf-647528_960_720.jpg',
  'https://cdn.pixabay.com/photo/2021/01/21/15/54/books-5937716_960_720.jpg',
  'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736875_960_720.jpg',
];
