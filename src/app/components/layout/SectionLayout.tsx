import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { layout } from './Layout';
import styles from './Layout.module.scss';

const titleVariants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  rest: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};
const descVariants = {
  initial: {
    opacity: 0,
    x: -20,
    y: -10,
  },
  rest: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.4,
    },
  },
  hover: {},
};
const childerenVariants = {
  rest: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.4,
      duration: 0.6,
    },
  },
  initial: {
    opacity: 0,
    scale: 0.9,
  },
};
export const SectionLayout: React.FC<layout> = ({
  children,
  title,
  subTitle,
  color,
  desc,
}) => {
  return (
    <section
      style={{ background: color || 'transparent', minHeight: '100vh' }}
      className={styles.layout}
    >
      <div className={styles.content}>
        <div className={styles.wrap}>
          <div className={styles.title}>
            <Typography
              component={motion.h2}
              initial="initial"
              whileInView="rest"
              variants={titleVariants}
              variant="h2"
            >
              {title}
            </Typography>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 0.4, duration: 0.2 },
              }}
              className={styles.subTitle}
            >
              {subTitle}
            </motion.p>
          </div>
          {desc && (
            <motion.p
              whileInView="rest"
              initial="initial"
              whileHover="hover"
              variants={descVariants}
              className={styles.desc}
            >
              {desc}
            </motion.p>
          )}
        </div>
        <motion.div
          whileInView="rest"
          initial="initial"
          variants={childerenVariants}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};
