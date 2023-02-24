import { useElementWidth } from '../../../hooks';

import { motion } from 'framer-motion';
import styles from './RoundedBG.module.scss';
import { Container } from '../container/Container';
import { useMediaQuery } from '@mui/material';
import { TitleProps } from '../../../data';
import React from 'react';
import { gradient, yellow, orange } from '../../../assets/colors';

type Props = {
  data?: TitleProps[];
  color1?: string;
  color2?: string;
  zIndex?: number;
  size?: string;
  animate?: boolean;
};
export const Rounded = ({
  data,
  color1,
  color2,
  zIndex,
  size,
  animate,
}: Props) => {
  const [ref, width] = useElementWidth();
  const isMobile = useMediaQuery('(max-width: 600px)');

  let roundedVariants = {};
  if (!isMobile && animate) {
    roundedVariants = {
      rotate: {
        rotate: 360,
      },
    };
  }
  //styles
  const background =
    color1 && color2 ? gradient(color1, color2) : gradient(yellow, orange);
  const filter =
    color1 && color2
      ? `drop-shadow(0px 0px 60px ${color1})`
      : `drop-shadow(0px 0px 60px ${yellow})`;
  const iconFilter =
    color1 && color2
      ? `drop-shadow(1px 1px 1px ${color2})`
      : `drop-shadow(1px 1px 1px ${orange})`;
  const iconColor = color1 && color2 ? color1 : yellow;

  return (
    <motion.div
      style={{ zIndex: zIndex || 1, width: size || '333px' }}
      ref={ref}
      className={styles.wrap}
      whileHover={animate ? { scale: 1.05 } : {}}
    >
      <motion.div
        className={styles.box}
        style={{
          background: background,
          filter: filter,
          zIndex: zIndex || 1,
        }}
        initial={{}}
        animate={'rotate'}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatDelay: 2,
        }}
        variants={roundedVariants}
      >
        {data &&
          data.map((item, i, arr) => {
            const rotate = (360 / arr.length) * i;

            return (
              <div
                className={styles.box_item}
                key={`roundIcon${i}`}
                style={{
                  transform: `rotate(${rotate}deg) translate(${width / 2}px)`,
                }}
              >
                <div
                  className={styles.box_item_inner}
                  style={{
                    transform: `rotate(${(360 / -arr.length) * i}deg) `,
                  }}
                >
                  <item.icon
                    style={{ color: iconColor, filter: iconFilter }}
                    className={styles.box_item_inner_icon}
                  />
                </div>
              </div>
            );
          })}
      </motion.div>
      <div style={{ zIndex: zIndex || 1 }} className={styles.content}></div>
    </motion.div>
  );
};
