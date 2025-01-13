import { Box, useTheme, Divider } from '@mui/material';

import { Hero } from '../ui/Heros/Hero';
import { OurServices } from './OurServices';
import { LinkButton } from '../ui/Buttons/LinkButton';

import { paths } from '../../config/paths';
import { aboutUsStyles } from './AboutUs.styles';

const titleWhite = 'Свържете се с';
const titleBlack = 'нас';
const description = 'Нека заедно създадем вашето мечтано пространство!';

export const AboutUs = () => {
  const theme = useTheme();

  return (
    <Box sx={aboutUsStyles.container}>
      <OurServices />
      <Divider sx={aboutUsStyles.divider} />
      <Box sx={aboutUsStyles.contactsContainer}>
        <Hero
          titleWhite={titleWhite}
          titleBlack={titleBlack}
          description={description}
          divider={false}
        ></Hero>
        <LinkButton
          to={paths.contacts.path}
          backgoundColor={theme.palette.secondary.main}
        >
          CONTACTS
        </LinkButton>
        <Divider sx={aboutUsStyles.divider} />
      </Box>
    </Box>
  );
};
