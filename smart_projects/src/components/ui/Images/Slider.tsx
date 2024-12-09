import { Slide, SlideProps } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';
import styles from './Slider.module.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {
  Button,
  Fab,
  MobileStepper,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

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
} as SlideProps;

export default function Slider() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Slide
      arrows={isSmallScreen ? false : true}
      transitionDuration={isSmallScreen ? 100 : 700}
      {...properties}
    >
      {images.map((slide, index) => {
        return (
          <div className={styles.slide} key={slide}>
            <div style={{ backgroundImage: `url(${images[index]})` }}>
              <span>Slide {index + 1}</span>
            </div>
          </div>
        );
      })}
    </Slide>
  );
}

const images = [
  'https://cdn.pixabay.com/photo/2020/07/06/01/33/forest-5375005_960_720.jpg',
  'https://cdn.pixabay.com/photo/2015/02/24/15/41/wolf-647528_960_720.jpg',
  'https://cdn.pixabay.com/photo/2021/01/21/15/54/books-5937716_960_720.jpg',
  'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736875_960_720.jpg',
];
