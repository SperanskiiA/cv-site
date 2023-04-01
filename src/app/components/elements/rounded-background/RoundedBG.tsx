import { useElementWidth } from '../../../hooks';
import { motion } from 'framer-motion';
import styles from './RoundedBG.module.scss';

import { TitleProps } from '../../../data';
import { newYellow } from '../../../assets/colors';

type Props = {
  data?: TitleProps[];
  color1?: string;
  color2?: string;
  zIndex?: number;
  size?: string;
  animate?: boolean;

  variants?: any;
};
export const Rounded = ({
  data,
  color1,
  color2,
  zIndex,

  animate,
}: Props) => {
  const [ref, width] = useElementWidth();

  let roundedVariants = {};
  if (animate) {
    roundedVariants = {
      rotate: {
        rotate: 360,
      },
    };
  }

  //styles
  // const background =
  //   color1 && color2 ? gradient(color1, color2) : gradient(yellow, orange);
  // const filter =
  //   color1 && color2
  //     ? `drop-shadow(0px 0px 60px ${color1})`
  //     : `drop-shadow(0px 0px 60px ${yellow})`;
  // const iconFilter =
  //   color1 && color2
  //     ? `drop-shadow(1px 1px 1px ${color2})`
  //     : `drop-shadow(1px 1px 1px ${orange})`;
  // const iconColor = color1 && color2 ? color1 : yellow;

  return (
    <motion.div
      style={{ zIndex: zIndex || 1 }}
      ref={ref}
      className={styles.wrap}
    >
      <motion.div
        className={styles.box}
        style={{
          background: color1 || newYellow,
          filter: 'none',
          zIndex: zIndex || 1,
        }}
        animate={'rotate'}
        transition={{
          duration: 5,
          repeat: 0,
          repeatDelay: 3,
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
                    // filter: iconFilter
                    style={{ color: color2 || newYellow }}
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
