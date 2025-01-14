import { Box, Typography, useTheme } from '@mui/material';

import { aboutUsStyles } from './AboutUs.styles';
import { useTranslation } from 'react-i18next';

// const aboutUs = `Фирма „Смарт Проджектс“ ООД развива дейността си в сферата на довършителните работи за малки (частни)
//    и средно-големи строителни обекти. Ръководният ни състав се състои от професионални строителни инженери
//    с комбиниран опит от над 25години в строителния сектор - проектиране и изпълнение, в страната и чужбина.
//     Разполагаме с екип от над 10 човека с мултидисциплинарни профили, което ни позволява гъвкавост и
//     ефективност при работа на по-голям брой комплексни обектикакто в страната, така и в чужбина.`;

export const AboutUsText = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Box sx={aboutUsStyles.aboutUsTextcontainer(theme)}>
      <Typography
        fontSize={{
          xs: 16,
        }}
        style={aboutUsStyles.aboutUsText}
      >
        {t('aboutUsText')}
      </Typography>
    </Box>
  );
};
