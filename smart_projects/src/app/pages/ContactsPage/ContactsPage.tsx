import React from 'react';

import { Box, Link, Paper, Stack, Typography } from '@mui/material';

import { Hero } from '../../../components/ui/Heros/Hero';

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
      <Box sx={contactsPageStyles.container}>
        <Paper variant="elevation" elevation={24} sx={contactsPageStyles.paper}>
          <Typography variant="h6" gutterBottom>
            Get in Touch
          </Typography>
          <Stack gap={2} sx={contactsPageStyles.stack}>
            <Typography>
              Email:{' '}
              <Link href="mailto:info@smartprojects.com">
                info@smartprojects.com
              </Link>
            </Typography>
            <Typography>
              Phone: <Link href="tel:+1234567890">+1 234 567 890</Link>
            </Typography>
            <Typography>
              Instagram:{' '}
              <Link
                href="https://instagram.com/smartprojects"
                target="_blank"
                rel="noopener noreferrer"
              >
                @smartprojects
              </Link>
            </Typography>
          </Stack>
        </Paper>
      </Box>
    </React.Fragment>
  );
};
