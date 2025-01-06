import React from 'react';

import { Box, Link, Paper, Stack, Typography } from '@mui/material';

import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

import { Hero } from '../../../components/ui/Heros/Hero';
import Timeline from '../../../components/ui/Timeline/Timeline';

import { contactsPageStyles } from './ContactsPage.styles';

export const ContactsPage = () => {
  return (
    <React.Fragment>
      <Hero
        titleWhite="Contact"
        titleBlack="us"
        description="Have questions or ready to start your apartment transformation? 
      Our team is here to provide expert advice, discuss your project, and bring your vision to life."
      />
      <Timeline />
      <Box sx={contactsPageStyles.container}>
        <Paper variant="elevation" elevation={24} sx={contactsPageStyles.paper}>
          <Typography variant="h6" gutterBottom>
            Get in Touch
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
