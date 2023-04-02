import { useMediaQuery } from '@mui/material';
import React from 'react';
import { newYellow } from '../../../assets/colors';
import { worksData } from '../../../data';
import Project from '../../elements/works-card/Project';
import { SectionLayout } from '../../layout/SectionLayout';
import styles from './Works.module.scss';

const WorksLayout = React.forwardRef((_, ref: React.Ref<HTMLDivElement>) => {
  const isMobile = useMediaQuery('(max-width: 820px)');
  return (
    <div className={styles.container} ref={ref}>
      <SectionLayout title="Recent Works" subTitle="projects">
        <div className={styles.flex}>
          {worksData.map(({ imgs, link, title, tools }, index) => {
            // const margin = (worksData.length - index) * 80;
            return (
              <div
                style={
                  !isMobile
                    ? { marginTop: `-${index * 100}px` }
                    : { marginTop: '20px' }
                }
              >
                <Project imgs={imgs} link={link} tools={tools} title={title} />
              </div>
            );
          })}
        </div>
      </SectionLayout>
    </div>
  );
});

export default WorksLayout;
