import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Box, Stack, Typography, useTheme } from '@mui/material';

import { Hero } from '../../../components/ui/Heros/Hero';
import { LinkButton } from '../../../components/ui/Buttons/LinkButton';
import { PhraseRotator } from '../../../components/ui/Text/PhraseRotator';
import { OurWorkImages } from '../../../components/ui/Images/Slider/OurWorkImages';

import { paths } from '../../../config/paths';
import homePhoto from '../../../assets/images/home/homePageBuildings.jpg';
import homePhotoPlaceHolder from '../../../assets/images/home/homePageBuildingsPlaceHolder10.jpg';

import { homePageStyles } from './HomePage.styles';
import { AboutUsPage } from '../../../components/AboutUs/AboutUs';

const titleWhite = 'Our latest';
const titleBlack = 'projects';
const aboutUs = `Фирма „Смарт Проджектс“ ООД развива дейността си в сферата на довършителните работи за малки (частни)
   и средно-големи строителни обекти. Ръководният ни състав се състои от професионални строителни инженери 
   с комбиниран опит от над 25години в строителния сектор - проектиране и изпълнение, в страната и чужбина.
    Разполагаме с екип от над 10 човека с мултидисциплинарни профили, което ни позволява гъвкавост и 
    ефективност при работа на по-голям брой комплексни обектикакто в страната, така и в чужбина.`;

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
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              mb: { xs: 2.5, md: 9 },
              ml: { xs: 2.5, md: 9 },
              mr: { xs: 2.5, md: 9 },
              p: 1.5,
              background: theme.palette.primary.main,
              // backdropFilter: 'blur(10px)', // Blur effect
              borderRadius: '16px', // Optional: Rounded corners
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Optional: Shadow for elevation
            }}
          >
            <Typography fontSize={{ xs: 16 }} style={{ textAlign: 'justify' }}>
              {aboutUs}
            </Typography>
          </Box>
        </Box>
      </Stack>
      <Box component="section">
        <AboutUsPage></AboutUsPage>
      </Box>
      <Box component="section">
        <Hero
          titleWhite={titleWhite}
          titleBlack={titleBlack}
          divider={false}
        ></Hero>
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
