import React from 'react';
import styles from './Loading.module.scss';
export const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.flex}>
        <div>Loading</div>
      </div>
    </div>
  );
};
