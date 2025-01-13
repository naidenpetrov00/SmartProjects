import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Box, Stack } from '@mui/material';

import { AboutUs } from '../../../components/AboutUs/AboutUs';
import { PhraseRotator } from '../../../components/ui/Text/PhraseRotator';
import { OurWorkHomePageImages } from '../../../components/Images/OurWorkHomePageImages';

import { homePageStyles } from './HomePage.styles';
import homePhoto from '../../../assets/images/home/homePageBuildings.jpg';
import homePhotoPlaceHolder from '../../../assets/images/home/homePageBuildingsPlaceHolder10.jpg';

export const HomePage = () => {
  return (
    <Box component="main">
      <Stack direction={'column'}>
        <Box sx={homePageStyles.container}>
          <LazyLoadImage
            src={homePhoto}
            placeholderSrc={homePhotoPlaceHolder}
            alt="Home Background"
            effect="opacity"
            width="100%"
            height="100%"
            style={homePageStyles.lazyImage}
          />
          <PhraseRotator />
        </Box>
      </Stack>
      <Box component="section">
        <AboutUs />
      </Box>
      <Box component="section">
        <OurWorkHomePageImages />
      </Box>
    </Box>
  );
};
