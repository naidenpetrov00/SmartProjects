import { useState } from 'react';
import { Slide, SlideProps } from 'react-slideshow-image';

import {
  Box,
  Fab,
  IconButton,
  ImageListItem,
  Slide as MuiSlide,
  ImageListItemBar,
  useMediaQuery,
  useTheme,
  Collapse,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { ImageDetails } from '../ImageDetails';

import 'react-slideshow-image/dist/styles.css';
import './Slider.css';
import { sliderStyles } from './Slider.styles';

const images = [
  'https://cdn.pixabay.com/photo/2020/07/06/01/33/forest-5375005_960_720.jpg',
  'https://cdn.pixabay.com/photo/2015/02/24/15/41/wolf-647528_960_720.jpg',
  'https://cdn.pixabay.com/photo/2021/01/21/15/54/books-5937716_960_720.jpg',
  'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736875_960_720.jpg',
];

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
    <Box sx={sliderStyles.container}>
      <Slide
        {...properties}
        arrows={!isSmallScreen && !detailsShowed}
        transitionDuration={isSmallScreen ? 400 : 700}
        canSwipe={!detailsShowed}
      >
        {images.map((slide, index) => {
          return (
            <ImageListItem key={index} sx={sliderStyles.imageListItem}>
              <img
                src={images[index]}
                alt="item images"
                loading="lazy"
                style={sliderStyles.image}
              />
              <MuiSlide
                in={detailsShowed}
                // mountOnEnter
                // unmountOnExit
                // orientation="horizontal"
                // timeout={100}
              >
                <div>
                  <ImageDetails onCloseBtnClick={setDetailsShowed} />
                </div>
              </MuiSlide>
              {/* {detailsShowed && (
                <ImageDetails onCloseBtnClick={setDetailsShowed} />
              )} */}
            </ImageListItem>
          );
        })}
      </Slide>
      {!detailsShowed && (
        <ImageListItemBar
          title="Title"
          subtitle="SubTitle"
          actionIcon={
            <IconButton
              size="large"
              sx={sliderStyles.iconButton}
              aria-label="Info about Item Images"
              onClick={() => setDetailsShowed((state) => !state)}
            >
              <InfoIcon sx={sliderStyles.infoIcon} />
            </IconButton>
          }
          sx={sliderStyles.imageItemBar}
        />
      )}
    </Box>
  );
};
