import { useTranslation } from 'react-i18next';

import { Box, useTheme, Divider } from '@mui/material';

import { Hero } from '../ui/Heros/Hero';
import { OurServices } from './OurServices';

import { paths } from '../../config/paths';
import { aboutUsStyles } from './AboutUs.styles';
import { LinkButton } from '../ui/Buttons/LinkButton/LinkButton';

export const AboutUs = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box sx={aboutUsStyles.container} aria-labelledby="about-us-section">
      <OurServices />
      <Divider sx={aboutUsStyles.divider} />
      <Box sx={aboutUsStyles.contactsContainer}>
        <Hero
          titleWhite={t('titles.contactUs.white').toString()}
          titleBlack={t('titles.contactUs.black').toString()}
          description={t('descriptions.contactUs').toString()}
          divider={false}
          aria-labelledby="hero-contact-description"
        />
        <LinkButton
          to={paths.contacts.path}
          backgroundColor={theme.palette.secondary.main}
          aria-label="Go to contacts page"
        >
          {t('buttons.contacts')}
        </LinkButton>
        <Divider sx={aboutUsStyles.divider} />
      </Box>
    </Box>
  );
};
