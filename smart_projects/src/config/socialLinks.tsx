import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

import { SocialLink } from '../types/socialLinks';

export const socialLinks: SocialLink[] = [
  { href: 'https://facebook.com', icon: <FacebookIcon />, label: 'Facebook' },
  { href: 'https://x.com', icon: <TwitterIcon />, label: 'Twitter' },
  {
    href: 'https://instagram.com',
    icon: <InstagramIcon />,
    label: 'Instagram',
  },
  { href: 'https://youtube.com', icon: <YouTubeIcon />, label: 'YouTube' },
];
