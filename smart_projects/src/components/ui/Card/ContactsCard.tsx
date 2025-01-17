import { useTranslation } from 'react-i18next';

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

import { contactsCardStyles } from './ContactsCard.styles';

export const ContactsCard = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={contactsCardStyles.container}>
      <Paper variant="elevation" elevation={24} sx={contactsCardStyles.paper}>
        <Typography
          variant="h3"
          sx={{
            fontSize: '1.25rem',
            textAlign: 'center',
          }}
          gutterBottom
        >
          {t('pages.contacts.getInTouch')}
        </Typography>
        <Stack gap={2} sx={contactsCardStyles.stack}>
          <Grid container spacing={2}>
            <Grid
              size={{
                xs: 12,
                sm: 6,
              }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Typography variant="body1" aria-labelledby="manager-name">
                инж. Емануил Виденов – управител
              </Typography>

              <Box
                sx={contactsCardStyles.contactContainer}
                aria-labelledby="email-contact"
              >
                <EmailIcon />
                <Link
                  href="mailto:e.videnov@smart-projects.bg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email инж. Емануил Виденов"
                >
                  e.videnov@smart-projects.bg
                </Link>
              </Box>
              <Box
                sx={contactsCardStyles.contactContainer}
                aria-labelledby="phone-contact"
              >
                <CallIcon />
                <Link
                  href="tel:+359883393977"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Call инж. Емануил Виденов"
                >
                  +359 883 393 977
                </Link>
              </Box>
              {isSmallScreen && <Divider color="white" />}
            </Grid>
            <Grid
              size={{
                xs: 12,
                sm: 6,
              }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Typography variant="body1" aria-labelledby="engineer-name">
                инж. Сергей Кириленко – главен инженер
              </Typography>
              <Box
                sx={contactsCardStyles.contactContainer}
                aria-labelledby="email-contact"
              >
                <EmailIcon />
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:s.kyrylenko@smart-projects.bg"
                  aria-label="Email инж. Сергей Кириленко"
                >
                  s.kyrylenko@smart-projects.bg
                </Link>
              </Box>
              <Box
                sx={contactsCardStyles.contactContainer}
                aria-labelledby="phone-contact"
              >
                <CallIcon />
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel:+359886116536"
                  aria-label="Call инж. Сергей Кириленко"
                >
                  +359 886 116 536
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Divider color="white" />
          <Box
            sx={contactsCardStyles.contactContainer}
            aria-labelledby="social-media-contact"
          >
            <InstagramIcon />
            <Link
              href="https://instagram.com/smartprojects"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow SmartProjects on Instagram"
            >
              @smartprojects
            </Link>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};
