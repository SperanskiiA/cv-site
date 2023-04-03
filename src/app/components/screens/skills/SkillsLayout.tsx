import Typography from '@mui/material/Typography';
import { easeInOut, motion } from 'framer-motion';
import React, { useState } from 'react';
import { blue, darkBlue, white } from '../../../assets/colors';
import { cardData } from '../../../data';
import { SectionLayout } from '../../layout/SectionLayout';
import ExpirienceItem from '../../elements/ExpirienceItem/ExpirienceItem';
import styles from './Skills.module.scss';
import { useMediaQuery } from '@mui/material';

const experienceVariants = {
  rest: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.8,
      type: easeInOut,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.6,
      type: easeInOut,
    },
  },
};

const SkillsLayout = React.forwardRef((_, ref: React.Ref<HTMLDivElement>) => {
  const mouseDevice = useMediaQuery('(hover: hover) and (pointer: fine)');
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <div ref={ref} style={{ marginTop: '-1px' }}>
      <SectionLayout
        title="Skills & Expirience"
        subTitle=""
        desc=" Every day I learn something new or improve my skills in technologies with which I have already worked."
        color={white}
      >
        <div className={styles.content}>
          <motion.div
            className={styles.skills}
            onHoverEnd={mouseDevice ? () => setActiveIdx(null) : undefined}
          >
            <Typography variant="h3">Skills</Typography>
            <div className={styles.skills_imgs}>
              {cardData.map((item, index) => {
                const activeIndex = activeIdx === index;
                return (
                  <motion.div
                    onHoverStart={
                      mouseDevice ? () => setActiveIdx(index) : undefined
                    }
                    onTap={!mouseDevice ? () => setActiveIdx(index) : undefined}
                    className={styles.img_box}
                    key={index}
                    style={activeIndex ? { color: darkBlue } : undefined}
                  >
                    <Typography>{item.title}</Typography>
                    {<item.icon className={styles.img} />}
                    {activeIndex && (
                      <motion.span
                        className={styles.backdrop}
                        layoutId="backdrop"
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          <motion.div className={styles.expirience}>
            <motion.div
              variants={experienceVariants}
              whileHover={mouseDevice ? 'hover' : ''}
              initial="rest"
            >
              <Typography
                variant="h3"
                style={{ padding: '12px', textAlign: 'center' }}
              >
                Expirience
              </Typography>
              <ExpirienceItem
                title="Web Developer"
                company="GeekDuks: Remote- Montreal, Canada"
                date="05.2022-02.2023"
              />
              <ExpirienceItem
                title="Frontend Developer"
                company="Chooselix: Remote- Montreal, Canada"
                date="08.2019-05.2020"
              />
            </motion.div>
          </motion.div>
        </div>
      </SectionLayout>
    </div>
  );
});

export default SkillsLayout;
