import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Box, Stack, useTheme } from '@mui/material';

import { Hero } from '../../../components/ui/Heros/Hero';
import { LinkButton } from '../../../components/ui/Buttons/LinkButton';
import { PhraseRotator } from '../../../components/ui/Text/PhraseRotator';
import { OurWorkImages } from '../../../components/ui/Images/Slider/OurWorkImages';

import { paths } from '../../../config/paths';
import homePhoto from '../../../assets/images/home/homePageBuildings.jpg';
import homePhotoPlaceHolder from '../../../assets/images/home/homePageBuildingsPlaceHolder10.jpg';

import { homePageStyles } from './HomePage.styles';

const titleWhite = 'Our latest';
const titleBlack = 'projects';

export const HomePage = () => {
  const theme = useTheme();
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
        <Hero titleWhite={titleWhite} titleBlack={titleBlack}></Hero>
        <OurWorkImages homePage={true} />
        <LinkButton
          backgoundColor={theme.palette.secondary.main}
          to={paths.ourWork.path}
        >
          CHECK MORE
        </LinkButton>
      </Box>
    </Box>
  );
};
