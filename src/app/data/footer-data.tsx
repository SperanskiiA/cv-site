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
  { link: '/', alt: 'Telegram', icon: TelegramIcon },
  { link: '/', alt: 'LinkedIn', icon: LinkedInIcon },
  { link: '/', alt: 'Facebook', icon: FacebookIcon },
];
