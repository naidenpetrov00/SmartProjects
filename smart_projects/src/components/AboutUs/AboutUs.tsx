import { Box, useTheme, Divider } from '@mui/material';
import { Hero } from '../ui/Heros/Hero';
import { LinkButton } from '../ui/Buttons/LinkButton';
import { paths } from '../../config/paths';
import { OurServices } from './OurServices';

export const AboutUs = () => {
  const theme = useTheme();

  return (
    <Box sx={{ pl: 4, pr: 4 }}>
      <OurServices secondary={theme.palette.secondary}></OurServices>
      <Divider sx={{ mt: 2, width: '100%' }} />
      <Box sx={{ textAlign: 'center' }}>
        <Hero
          titleWhite="Свържете се с"
          titleBlack="нас"
          description="Нека създадем заедно вашето мечтано пространство!"
          divider={false}
        ></Hero>
        <LinkButton
          to={paths.contacts.path}
          backgoundColor={theme.palette.secondary.main}
        >
          CONTACTS
        </LinkButton>
        <Divider sx={{ mt: 2, width: '100%' }} />
      </Box>
    </Box>
  );
};
