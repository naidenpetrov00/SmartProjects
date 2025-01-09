import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Hero } from '../../components/ui/Heros/Hero';
import { LinkButton } from '../../components/ui/Buttons/LinkButton';
import { paths } from '../../config/paths';

const titleWhite = 'Нашите';
const titleBlack = 'услуги';

export const AboutUsPage = () => {
  const theme = useTheme();

  return (
    <Box sx={{ pl: 4, pr: 4 }}>
      <Hero
        titleWhite={titleWhite}
        titleBlack={titleBlack}
        divider={false}
      ></Hero>
      {/* <Box
        sx={{
          background: 'url(/construction-banner.jpg) no-repeat center center',
          backgroundSize: 'cover',
          color: 'white',
          py: 6,
          px: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" fontWeight="bold">
          Смарт Проджектс ООД
        </Typography>
        <Typography variant="h5" mt={2}>
          Вашият партньор за довършителни работи и строителство
        </Typography>
      </Box> */}

      {/* Services Section */}
      <Box>
        {[
          {
            title: 'Мокри процеси',
            details: '• Полагане на замазки\n• Ръчно полагане на мазилки...',
          },
          {
            title: 'Сухо строителство',
            details: '• Монтаж на конструкции и предстенки от гипсокартон...',
          },
          {
            title: 'Настилки и облицовки',
            details: '• Полагане на фаянсови и гранитогресни настилки...',
          },
          {
            title: 'Покривни системи',
            details: '• Ремонт на съществуващи покривни системи...',
          },
          {
            title: 'Инсталации',
            details: '• Цялостни ВиК инсталации за частни обекти...',
          },
          {
            title: 'Проектиране',
            details: '• Консултации и разработване на идейни проекти...',
          },
          {
            title: 'Почистване',
            details: '• Специализирани услуги за почистване...',
          },
        ].map((service, index) => (
          <Accordion
            key={index}
            defaultExpanded={index === 0}
            sx={{
              marginLeft: { md: 32 },
              marginRight: { md: 32 },
              backgroundColor: theme.palette.secondary.main,
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color="textSecondary">{service.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">{service.details}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Divider sx={{ mt: 2, width: '100%' }} />

      {/* Contact Call-to-Action */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Hero
          titleWhite="Свържете се с"
          titleBlack="нас"
          description="Нека създадем заедно вашето мечтано пространство!"
          divider={false}
        ></Hero>
        <LinkButton
          to={paths.contacts.path}
          backgoundColor={theme.palette.secondary.main}
        >
          CONTACTS
        </LinkButton>
        <Divider sx={{ mt: 2, width: '100%' }} />
      </Box>
    </Box>
  );
};
