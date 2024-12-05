import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { Copyright } from '../Copyright';

import { paths } from '../../../config/paths';
import { socialLinks } from '../../../config/socialLinks';

import { footerStyles } from './Footer.styles';

export const Footer = () => {
  return (
    <Box component={'footer'} sx={footerStyles.footer}>
      <Container sx={footerStyles.container}>
        <Box sx={footerStyles.boxContainer} color="primary.contrastText">
          <Box sx={footerStyles.boxContent}>
            <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
              <Typography variant="h5">SmartProjects</Typography>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ fontWeight: 600, mt: 2 }}
              >
                Contacts us.
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Reach out to schedule a visit. The first step of our work!
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Email:{' '}
                <Link
                  href="mailto:info@smartprojects.com"
                  aria-label="Send email to info@smartprojects.com"
                >
                  info@smartprojects.com
                </Link>
              </Typography>
              <Typography variant="body2">
                Phone:{' '}
                <Link href="tel:+123456789" aria-label="Call +359 87 910 9421">
                  +359 87 910 9421
                </Link>
              </Typography>
            </Box>
          </Box>
          <Box sx={footerStyles.boxItems}>
            <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
              Product
            </Typography>
            <Link
              variant="body2"
              href="#"
              aria-label="Learn about product pricing"
            >
              Pricing
            </Link>
            <Link
              variant="body2"
              href="#"
              aria-label="Learn from frequently asked questions"
            >
              FAQs
            </Link>
          </Box>
          <Box sx={footerStyles.navigation}>
            <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
              Navigation
            </Typography>
            <Box
              component={'nav'}
              role="navigation"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              {Object.values(paths).map((path, index) => (
                <div>
                  <Link key={index} variant="body2" href={path.path}>
                    {path.label}
                  </Link>
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
