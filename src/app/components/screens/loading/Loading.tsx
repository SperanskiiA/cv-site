import React from 'react';
import styles from './Loading.module.scss';
import { Player } from '@lottiefiles/react-lottie-player';
import * as lottie from '../../../assets/lotties/141443-two-dots-loading-loader.json';
export const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.flex}>
        <Player
          src={lottie}
          className={styles.lottie}
          autoplay={true}
          loop={true}
        />
      </div>
    </div>
  );
};
