import Box from '@mui/material/Box';
import { Grid2 as Grid, Link } from '@mui/material';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';

import { Copyright } from '../Copyright';
import { socialLinks } from '../../../config/socialLinks';
import { footerStyles } from './Footer.styles';
import { useMediaQuery, useTheme } from '@mui/material';
import { LinkButtonUnderline } from '../Buttons/LinkButton/LinkButtonUnderline';
import SvgIcon from '../../../assets/images/logo/SvgIcon';
import { usePaths } from '../../../hooks/usePaths';
import { useTranslation } from 'react-i18next';
import { contactsCardStyles } from '../Card/ContactsCard.styles';

export const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const paths = usePaths();
  const { t } = useTranslation();

  return (
    <Box component="footer" sx={footerStyles.footer}>
      <Container sx={footerStyles.container}>
        <Box sx={footerStyles.boxContainer} color="primary.contrastText">
          <Box sx={footerStyles.boxContent}>
            <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
              <SvgIcon width="200" />
              <Typography
                variant="body2"
                gutterBottom
                sx={{ fontWeight: 600, mt: 3 }}
              >
                {t('footer.contactUs')}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {t('footer.reachOut')}
              </Typography>
              <Grid container spacing={2}>
                {/* Left side */}
                <Grid
                  size={{ xs: 12, sm: 6 }}
                  sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                >
                  <Typography variant="body2">
                    инж. Емануил Виденов – управител
                  </Typography>
                  <Box sx={contactsCardStyles.contactContainer}>
                    <EmailIcon />
                    <Link
                      href="mailto:e.videnov@smart-projects.bg"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Email Emanuil Videnov"
                    >
                      e.videnov@smart-projects.bg
                    </Link>
                  </Box>
                  <Box sx={contactsCardStyles.contactContainer}>
                    <CallIcon />
                    <Link
                      href="tel:+359883393977"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Call Emanuil Videnov"
                    >
                      +359 883 393 977
                    </Link>
                  </Box>
                </Grid>
                <Grid
                  size={{ xs: 12, sm: 6 }}
                  sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                >
                  <Typography variant="body2">
                    инж. Сергей Кириленко – главен инженер
                  </Typography>
                  <Box sx={contactsCardStyles.contactContainer}>
                    <EmailIcon />
                    <Link
                      href="mailto:s.kyrylenko@smart-projects.bg"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Email Sergey Kyrylenko"
                    >
                      s.kyrylenko@smart-projects.bg
                    </Link>
                  </Box>
                  <Box sx={contactsCardStyles.contactContainer}>
                    <CallIcon />
                    <Link
                      href="tel:+359886116536"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Call Sergey Kyrylenko"
                    >
                      +359 886 116 536
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box sx={footerStyles.navigation}>
            <Typography
              variant="body1"
              sx={{ fontWeight: 'medium', mt: isSmallScreen ? 3 : 0 }}
            >
              {t('footer.navigation')}
            </Typography>
            <Box
              component="nav"
              role="navigation"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              {Object.values(paths).map((path, index) => (
                <div key={index}>
                  <LinkButtonUnderline
                    to={path.path}
                    aria-label={`Navigate to ${path.label}`}
                  >
                    {path.label}
                  </LinkButtonUnderline>
                </div>
              ))}
            </Box>
          </Box>
        </Box>
        <Box sx={footerStyles.boxSocial}>
          <div>
            <Copyright />
          </div>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ justifyContent: 'left' }}
          >
            {socialLinks.map(({ href, icon, label }) => (
              <IconButton
                target="_blank"
                rel="noopener noreferrer"
                key={label}
                size="small"
                href={href}
                aria-label={`Visit Smart Projects on ${label}`}
                sx={{ alignSelf: 'center' }}
              >
                {icon}
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
