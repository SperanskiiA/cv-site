import React, { useState } from 'react';
import { Viewer } from './pdf';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FC } from 'react';
import { PDF } from './pdf.viewer';

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
    width: '90%',
    height: '90%',
    left: '5%',
    top: '5%',
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
          {/* <Viewer /> */}
          <PDF />
        </Box>
      </Modal>
    </div>
  );
};
