import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Box, Stack } from '@mui/material';

import { AboutUs } from '../../../components/AboutUs/AboutUs';
import { PhraseRotator } from '../../../components/ui/Text/PhraseRotator';
import { OurWorkHomePageImages } from '../../../components/Images/OurWorkHomePageImages';

import { homePageStyles } from './HomePage.styles';
import homePhoto from '../../../assets/images/home/homePageBuildings.jpg';
import homePhotoPlaceHolder from '../../../assets/images/home/homePageBuildingsPlaceHolder10.jpg';
import { LanguageSelector } from '../../../components/ui/Buttons/LanguageSelector';

export const HomePage = () => {
  return (
    <Box component="main" aria-labelledby="home-page-main-content">
      <Stack direction={'column'}>
        <Box sx={homePageStyles.container}>
          <LazyLoadImage
            src={homePhoto}
            placeholderSrc={homePhotoPlaceHolder}
            alt="Beautiful city skyline with modern buildings in the background"
            effect="opacity"
            width="100%"
            height="100%"
            style={homePageStyles.lazyImage}
            aria-describedby="home-page-background-image"
          />
          <PhraseRotator />
        </Box>
        <LanguageSelector aria-label="Select language" />
      </Stack>
      <Box component="section" aria-labelledby="about-us-section">
        <AboutUs />
      </Box>
      <Box component="section" aria-labelledby="our-work-section">
        <OurWorkHomePageImages />
      </Box>
    </Box>
  );
};
