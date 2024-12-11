import React, { useState } from 'react';
import { Slide, SlideProps } from 'react-slideshow-image';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {
  Box,
  Fab,
  IconButton,
  ImageListItem,
  ImageListItemBar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { ImageDetails } from './ImageDetails';
import InfoIcon from '@mui/icons-material/Info';

import 'react-slideshow-image/dist/styles.css';

const properties = {
  easing: 'ease',
  indicators: true,
  prevArrow: (
    <Fab
      size="small"
      aria-label="Previous slide"
      title="Previous slide"
      color="secondary"
      sx={{ ml: 1 }}
    >
      <KeyboardArrowLeftIcon color="inherit" />
    </Fab>
  ),
  nextArrow: (
    <Fab
      size="small"
      aria-label="Next slide"
      title="Next slide"
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
  const [detailsShowed, setDetailsShowed] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <React.Fragment>
      <Slide
        arrows={!isSmallScreen && !detailsShowed}
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
                style={{ borderRadius: 16, display: 'block' }}
              />
              {detailsShowed && (
                <Box
                  sx={{
                    borderRadius: 4,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black background
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1,
                    textAlign: 'center',
                  }}
                >
                  <Box>
                    <h3 style={{ margin: 0 }}>Slide {index + 1}</h3>
                    <p>Custom overlay text for the image</p>
                  </Box>
                </Box>
              )}
            </ImageListItem>
          );
        })}
      </Slide>
      {!detailsShowed && <ImageDetails onDetailsShow={setDetailsShowed} />}
    </React.Fragment>
  );
};

const images = [
  'https://cdn.pixabay.com/photo/2020/07/06/01/33/forest-5375005_960_720.jpg',
  'https://cdn.pixabay.com/photo/2015/02/24/15/41/wolf-647528_960_720.jpg',
  'https://cdn.pixabay.com/photo/2021/01/21/15/54/books-5937716_960_720.jpg',
  'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736875_960_720.jpg',
];
