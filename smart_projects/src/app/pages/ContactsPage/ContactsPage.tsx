import React from 'react';

import {
  Box,
  Divider,
  Grid2 as Grid,
  Link,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

import { Hero } from '../../../components/ui/Heros/Hero';
import Timeline from '../../../components/ui/Timeline/Timeline';

import { contactsPageStyles } from './ContactsPage.styles';
import { useTranslation } from 'react-i18next';

export const ContactsPage = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <React.Fragment>
      <Hero
        titleWhite={t('titles.contactUs.white').toString()}
        titleBlack={t('titles.contactUs.black').toString()}
        description={t('descriptions.contactUs').toString()}
      />
      <Timeline />
      <Box sx={contactsPageStyles.container}>
        <Paper variant="elevation" elevation={24} sx={contactsPageStyles.paper}>
          <Typography variant="h6" sx={{ textAlign: 'center' }} gutterBottom>
            {t('pages.contacts.getInTouch')}
          </Typography>
          <Stack gap={2} sx={contactsPageStyles.stack}>
            <Grid container spacing={2}>
              <Grid
                size={{ xs: 12, sm: 6 }}
                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
              >
                <Typography variant="body1">
                  инж. Емануил Виденов – управител
                </Typography>

                <Box sx={contactsPageStyles.contactContainer}>
                  <EmailIcon />
                  <Link
                    href="mailto:e.videnov@smart-projects.bg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    e.videnov@smart-projects.bg
                  </Link>
                </Box>
                <Box sx={contactsPageStyles.contactContainer}>
                  <CallIcon />
                  <Link
                    href="tel:+359883393977"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +359 883 393 977
                  </Link>
                </Box>
                {isSmallScreen && <Divider color="white" />}
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6 }}
                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
              >
                <Typography variant="body1">
                  инж. Сергей Кириленко – главен инженер
                </Typography>
                <Box sx={contactsPageStyles.contactContainer}>
                  <EmailIcon />
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:s.kyrylenko@smart-projects.bg"
                  >
                    s.kyrylenko@smart-projects.bg
                  </Link>
                </Box>
                <Box sx={contactsPageStyles.contactContainer}>
                  <CallIcon />
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="tel:+359886116536"
                  >
                    +359 886 116 536
                  </Link>
                </Box>
              </Grid>
            </Grid>
            <Divider color="white" />
            <Box sx={contactsPageStyles.contactContainer}>
              <InstagramIcon />
              <Link
                href="https://instagram.com/smartprojects"
                target="_blank"
                rel="noopener noreferrer"
              >
                @smartprojects
              </Link>
            </Box>
          </Stack>
        </Paper>
      </Box>
    </React.Fragment>
  );
};
