import { useMediaQuery } from '@mui/material';
import React from 'react';

type ContainerProps = {
  bg?: string;
  children: React.ReactNode;
};
export const Container = ({ children, bg }: ContainerProps) => {
  const mobile = useMediaQuery('(max-width: 600px)');
  const padding = mobile ? '24px 6px' : '24px';
  return (
    <div style={{ background: bg || 'transparent', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: padding }}>
        {children}
      </div>
    </div>
  );
};
