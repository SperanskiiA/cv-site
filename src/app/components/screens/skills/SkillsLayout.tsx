import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { blue, white } from '../../../assets/colors';
import { cardData } from '../../../data';
import { SectionLayout } from '../../layout/SectionLayout';
import ExpirienceItem from '../../elements/ExpirienceItem/ExpirienceItem';
import styles from './Skills.module.scss';

const SkillsLayout = React.forwardRef((_, ref: React.Ref<HTMLDivElement>) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <div ref={ref}>
      <SectionLayout
        title="Skills & Expirience"
        subTitle=""
        desc="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, inventore! Blanditiis dolor reiciendis, obcaecati quia, officiis, incidunt ipsa excepturi corrupti eligendi dolorem vero "
        color={white}
      >
        <div className={styles.content}>
          <motion.div
            className={styles.skills}
            onHoverEnd={() => setActiveIdx(null)}
          >
            <Typography variant="h3">Skills</Typography>
            <div className={styles.skills_imgs}>
              {cardData.map((item, index) => {
                const activeIndex = activeIdx === index;
                return (
                  <motion.div
                    onHoverStart={() => setActiveIdx(index)}
                    className={styles.img_box}
                    key={index}
                    style={activeIndex ? { color: blue } : undefined}
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
          <div className={styles.expirience}>
            <Typography variant="h3">Expirience</Typography>
            <ExpirienceItem
              title="Web Developer"
              company="GeekDuks: Remote- Montreal, Canada"
              date="05.2022-02.2023"
            />
            <ExpirienceItem
              title="Frontend Developer"
              company="Chooselix: Remote- Montreal, Canada"
              date="08.2019 - 05.2020"
            />
          </div>
        </div>
      </SectionLayout>
    </div>
  );
});

export default SkillsLayout;
