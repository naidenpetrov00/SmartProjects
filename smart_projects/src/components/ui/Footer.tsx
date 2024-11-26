import * as React from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import TwitterIcon from '@mui/icons-material/X';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import { paths } from '../../config/paths';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'primary.contrastText', mt: 1 }}>
      {'Copyright © '}
      <Link href="https://mui.com/">SmartProjects</Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export const Footer = () => {
  const socialLinks = [
    { href: 'https://facebook.com', icon: <FacebookIcon />, label: 'Facebook' },
    { href: 'https://x.com', icon: <TwitterIcon />, label: 'Twitter' },
    {
      href: 'https://instagram.com',
      icon: <InstagramIcon />,
      label: 'Instagram',
    },
    { href: 'https://youtube.com', icon: <YouTubeIcon />, label: 'YouTube' },
  ];
  const borderTopRadius = 16;
  return (
    <Box
      component={'footer'}
      sx={{
        bgcolor: 'primary.main',
        borderTopLeftRadius: borderTopRadius,
        borderTopRightRadius: borderTopRadius,
        // '& a': { color: 'primary.contrastText' },
        '& a': { color: 'secondary.main' },
        boxShadow:
          '0px -2px 4px -1px rgba(0, 0, 0, 0.2), 0px -4px 5px 0px rgba(0, 0, 0, 0.14), 0px -1px 10px 0px rgba(0, 0, 0, 0.12);',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: 'center', md: 'left' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            width: '100%',
            justifyContent: 'space-between',
          }}
          color="primary.contrastText"
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              minWidth: { xs: '100%', sm: '60%' },
            }}
          >
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
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
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
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            pt: { xs: 4, sm: 8 },
            width: '100%',
            borderTop: '1px solid',
            borderColor: 'primary.contrastText',
          }}
        >
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
