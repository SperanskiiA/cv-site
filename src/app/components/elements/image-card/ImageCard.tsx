import { easeIn, easeInOut, motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import styles from './ImageCard.module.scss';

type ImageCard = {
  bg?: string;
  shadow?: string;
  children?: any;
  title: string;
  delay?: number;
};
export const ImageCard = ({
  bg,
  shadow,
  children,
  title,
  delay,
}: ImageCard) => {
  return (
    <motion.div
      className={styles.wrap}
      initial={{
        opacity: 0,
        x: -30,
      }}
      transition={{
        type: easeIn,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          delay: delay,
          duration: 0.2,
        },
      }}
      whileHover={{
        scale: 1.1,
        transition: {
          delay: 0,
          duration: 0.1,
        },
      }}
      style={{
        background: bg || 'transparent',
        padding: '16px',
        boxShadow: shadow
          ? `-2px 3px 12px 0px ${shadow}`
          : '-2px 3px 12px 0px rgba(0,0,0,0.7)',
        textAlign: 'center',
      }}
    >
      <p>{title}</p>
      <div style={{ width: '40px', margin: '0 auto', padding: '10px' }}>
        {children}
      </div>
    </motion.div>
  );
};
