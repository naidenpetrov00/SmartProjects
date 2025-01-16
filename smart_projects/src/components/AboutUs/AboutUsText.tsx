import { useTranslation } from 'react-i18next';

import { Box, Typography, useTheme } from '@mui/material';

import { aboutUsStyles } from './AboutUs.styles';

export const AboutUsText = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      sx={aboutUsStyles.aboutUsTextcontainer(theme)}
      role="region"
      aria-labelledby="about-us-text"
    >
      <Typography
        id="about-us-text"
        variant="body1"
        fontSize={{
          xs: 16,
        }}
        sx={aboutUsStyles.aboutUsText}
      >
        {t('aboutUsText')}
      </Typography>
    </Box>
  );
};
