import { useElementWidth } from '../../../hooks';

import { motion } from 'framer-motion';
import styles from './RoundedBG.module.scss';
import { Container } from '../container/Container';

export const Rounded = () => {
  const [ref, width] = useElementWidth();

  const arr = [1, 2, 3, 4, 5, 'null'];

  return (
    <Container>
      <motion.div ref={ref} className={styles.wrap} whileHover={{ scale: 1.1 }}>
        <motion.div
          className={styles.box}
          initial={{}}
          animate={{ rotate: 360 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          {arr.map((item, i, arr) => {
            const rotate = (360 / arr.length) * i;

            return (
              <div
                className={styles.box_item}
                key={item}
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
                  <div> {item}</div>
                </div>
              </div>
            );
          })}
        </motion.div>
        <div className={styles.content}>
          <div>hello world</div>
        </div>
      </motion.div>
    </Container>
  );
};
