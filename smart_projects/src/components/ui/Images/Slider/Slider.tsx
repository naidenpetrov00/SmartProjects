import { useState } from 'react';
import { Slide, SlideProps } from 'react-slideshow-image';

import {
  Box,
  Fab,
  ImageListItem,
  Slide as MuiSlide,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { ImageDetails } from '../ImageDetails';
import { ImageDescription } from '../ImageDescription';

import './Slider.css';
import 'react-slideshow-image/dist/styles.css';
import { sliderStyles } from './Slider.styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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

interface SliderProperties {
  images: [string];
}

export const Slider = ({ images }: SliderProperties) => {
  const [detailsShowed, setDetailsShowed] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Box sx={sliderStyles.container}>
      <Slide
        {...properties}
        arrows={!isSmallScreen && !detailsShowed}
        transitionDuration={isSmallScreen ? 400 : 700}
        canSwipe={!detailsShowed}
        onChange={(from, to) => setCurrentSlide(to)}
      >
        {images.map((slide, index) => {
          return (
            <ImageListItem key={index} sx={sliderStyles.imageListItem}>
              <LazyLoadImage
                // <img
                src={images[index]}
                alt="item images"
                // effect="blur"
                // loading={index <= 2 ? 'eager' : 'lazy'}
                loading="eager"
                style={{
                  display: currentSlide === index ? 'block' : 'none',
                  ...sliderStyles.image,
                }}
              />
              <h1 id="opopop">{index}</h1>
              <MuiSlide in={detailsShowed}>
                <div>
                  <ImageDetails onCloseBtnClick={setDetailsShowed} />
                </div>
              </MuiSlide>
            </ImageListItem>
          );
        })}
      </Slide>
      {!detailsShowed && <ImageDescription onShowBtnClick={setDetailsShowed} />}
    </Box>
  );
};
