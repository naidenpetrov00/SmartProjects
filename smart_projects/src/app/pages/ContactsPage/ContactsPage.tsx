import React from 'react';

import { Box, Link, Paper, Stack, Typography } from '@mui/material';

import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

import { Hero } from '../../../components/ui/Heros/Hero';
import Timeline from '../../../components/ui/Timeline/Timeline';

import { contactsPageStyles } from './ContactsPage.styles';
import { useTranslation } from 'react-i18next';

export const ContactsPage = () => {
  const { t } = useTranslation();

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
          <Typography variant="h6" gutterBottom>
            {t('pages.contacts.getInTouch')}
          </Typography>
          <Stack gap={2} sx={contactsPageStyles.stack}>
            <Box sx={contactsPageStyles.contactContainer}>
              <EmailIcon />
              <Link href="mailto:info@smartprojects.com">
                info@smartprojects.com
              </Link>
            </Box>
            <Box sx={contactsPageStyles.contactContainer}>
              <CallIcon />
              <Link href="tel:+1234567890">+1 234 567 890</Link>
            </Box>
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
