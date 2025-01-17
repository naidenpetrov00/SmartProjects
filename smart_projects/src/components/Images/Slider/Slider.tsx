import { useState } from 'react';
import { Slide, SlideProps } from 'react-slideshow-image';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
import { sliderStyles } from './Slider.styles';
import 'react-slideshow-image/dist/styles.css';
import { Place } from '../../../hooks/usePlaces';

const slideProperties = {
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
  place: Place;
}

export const Slider = ({ place }: SliderProperties) => {
  const [detailsShowed, setDetailsShowed] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = place.getImages();

  return (
    <Box
      sx={sliderStyles.container(isSmallScreen)}
      role="region"
      aria-label="Image slider"
    >
      <Slide
        {...slideProperties}
        arrows={!detailsShowed}
        transitionDuration={isSmallScreen ? 400 : 700}
        canSwipe={false}
        onChange={(from, to) => setCurrentSlide(to)}
      >
        {images.map((slide, index) => {
          return (
            <ImageListItem
              key={index}
              sx={sliderStyles.imageListItem(isSmallScreen)}
              role="listitem"
              aria-label={`Slide ${index + 1}`}
            >
              <LazyLoadImage
                title={`place ${place.title}${index}`}
                loading="eager"
                width="100%"
                height="100%"
                src={images[index]}
                alt={`Image of ${place.title} - ${place.subtitle} - Slide ${
                  index + 1
                }`}
                effect="blur"
                style={{
                  display:
                    index === currentSlide + 1 || currentSlide === index
                      ? 'block'
                      : 'none',
                  ...sliderStyles.image,
                }}
              />
              <MuiSlide in={detailsShowed}>
                <div>
                  <ImageDetails
                    onCloseBtnClick={setDetailsShowed}
                    description={place.description}
                  />
                </div>
              </MuiSlide>
            </ImageListItem>
          );
        })}
      </Slide>
      {!detailsShowed && (
        <ImageDescription
          onShowBtnClick={setDetailsShowed}
          imageTitle={place.title}
          imageSubTitle={place.subtitle}
        />
      )}
    </Box>
  );
};
