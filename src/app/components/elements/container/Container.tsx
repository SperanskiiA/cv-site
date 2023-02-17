import React from 'react';

type ContainerProps = {
  bg?: string;
  children: React.ReactNode;
};
export const Container = ({ children, bg }: ContainerProps) => {
  return (
    <div style={{ background: bg || 'transparent' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '24px' }}>
        {children}
      </div>
    </div>
  );
};
