import { Container } from '../../elements/container/Container';
import React from 'react';
import { grey } from '../../../assets/colors';
import Typography from '@mui/material/Typography';

export const Works = () => {
  return (
    <Container bg={grey}>
      <div>
        <Typography textAlign="center">Resent works</Typography>
      </div>
    </Container>
  );
};
