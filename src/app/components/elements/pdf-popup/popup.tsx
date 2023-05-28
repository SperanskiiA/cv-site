import Box from '@mui/material/Box';

import ClearIcon from '@mui/icons-material/Clear';
import Modal from '@mui/material/Modal';
import { FC } from 'react';
import { PDF } from './pdf.viewer';

import { IconButton, useMediaQuery } from '@mui/material';
import { blue, darkGrey, grey, white } from '../../../assets/colors';

const style = {
  position: 'absolute' as 'absolute',
  top: '10%',
  left: '12.5%',

  width: '75%',
  height: '85%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: '0',
  '@media (max-width: 820px)': {
    width: '100%',
    height: '100%',
    left: '0',
    top: '0',
    border: 'none',
  },
};

const btnVisible = {
  position: 'fixed',
  top: '60px',
  right: '30px',
  zIndex: 10,
  backgroundColor: darkGrey,
  color: white,
  '&:hover': {
    backgroundColor: grey,
    color: blue,
  },
};

type PopupProps = {
  open: boolean;

  handleClose: () => void;
};

export const Popup: FC<PopupProps> = ({ handleClose, open }) => {
  const isMobile = useMediaQuery('(max-width: 820px)');
  const smallDevice = useMediaQuery('(max-width: 500px)');
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Viewer /> */}
          <PDF />
          {isMobile && (
            <IconButton sx={btnVisible} onClick={handleClose}>
              <ClearIcon fontSize={smallDevice ? 'medium' : 'large'} />
            </IconButton>
          )}
        </Box>
      </Modal>
    </div>
  );
};
