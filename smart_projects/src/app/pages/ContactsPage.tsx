import React from 'react';

import {
  Box,
  Card,
  Link,
  Paper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';

import { Hero } from '../../components/ui/Heros/Hero';

export const ContactsPage = () => {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Hero
        titleWhite="Contact"
        titleBlack="us"
        description="Have questions or ready to start your apartment transformation? 
      Our team is here to provide expert advice, discuss your project, and bring your vision to life."
      />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Paper
          variant="elevation"
          elevation={24}
          sx={{
            width: { xs: '80vw', sm: '30vw' },
            mt: 4,
            mb: 4,
            p: 1,
            borderRadius: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Get in Touch
          </Typography>
          <Stack
            gap={2}
            sx={{
              margin: '1rem 0',
              '& a': { color: theme.palette.text.primary },
            }}
          >
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
