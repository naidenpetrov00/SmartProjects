import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Box, Stack } from '@mui/material';

import { PhraseRotator } from '../../../components/ui/Text/PhraseRotator';

import homePhoto from '../../../assets/images/home/homePageBuildings.jpg';
import homePhotoPlaceHolder from '../../../assets/images/home/homePageBuildingsPlaceHolder10.jpg';

import { homePageStyles } from './HomePage.styles';
import { OurWorkPage } from '../OurWorkPage';
import Timeline from '../../../components/ui/Timeline/Timeline';

export const HomePage = () => {
  console.log('home renders');

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
      {/* <Box component="section">
        <Timeline />
      </Box> */}
      <Box component="section">
        <OurWorkPage />
      </Box>
    </Box>
  );
};
