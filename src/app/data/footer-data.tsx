import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

type Footer = {
  link: string;
  alt: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
};

export const footerData: Footer[] = [
  { link: 'https://t.me/sp_aron', alt: 'Telegram', icon: TelegramIcon },
  {
    link: 'https://www.linkedin.com/in/arsper/',
    alt: 'LinkedIn',
    icon: LinkedInIcon,
  },
  {
    link: 'https://www.facebook.com/profile.php?id=100089223344214',
    alt: 'Facebook',
    icon: FacebookIcon,
  },
];
