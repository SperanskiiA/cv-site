import React, { useState } from 'react';
import { Viewer } from './pdf';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FC } from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 424,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  '@media (max-width: 767px)': {
    width: '353px',
  },
};

type PopupProps = {
  open: boolean;

  handleClose: () => void;
};

export const Popup: FC<PopupProps> = ({ handleClose, open }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Viewer />
        </Box>
      </Modal>
    </div>
  );
};
