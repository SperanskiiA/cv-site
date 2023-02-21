import { ReactNode } from 'react';
import styles from './SvgImage.module.scss';

type ImageProps = {
  children: ReactNode;
  size: string;
  color: string;
};

export const Image = ({ children, size, color }: ImageProps) => {
  return (
    <span
      className={styles.image}
      style={{ width: size, height: size, color: color }}
    >
      {children}
    </span>
  );
};
