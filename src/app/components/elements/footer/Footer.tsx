import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import { yellow } from '../../../assets/colors';

export const Footer = () => {
  return (
    <Box position="static" sx={{ bottom: 0, width: '100%' }}>
      <Box sx={{ bottom: 0, left: 0 }}>
        <Box
          sx={{
            margin: '25px 0',
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            minHeight: '60px',
          }}
        >
          <IconButton>
            <LinkedInIcon fontSize="large" htmlColor={yellow} />
          </IconButton>
          <IconButton>
            <FacebookIcon fontSize="large" htmlColor={yellow} />
          </IconButton>
          <IconButton>
            <TelegramIcon fontSize="large" htmlColor={yellow} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
