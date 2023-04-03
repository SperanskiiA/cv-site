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
      <SectionLayout title="Recent Works" subTitle={isMobile ? '' : 'projects'}>
        <div className={styles.flex}>
          {worksData.map(({ imgs, link, title, tools, subTitle }, index) => {
            // const margin = (worksData.length - index) * 80;
            return (
              <div
                key={title}
                style={
                  !isMobile
                    ? { marginTop: `-${index * 100}px` }
                    : { marginTop: '20px' }
                }
              >
                <Project
                  imgs={imgs}
                  link={link}
                  tools={tools}
                  title={title}
                  subTitle={subTitle}
                />
              </div>
            );
          })}
        </div>
      </SectionLayout>
    </div>
  );
});

export default WorksLayout;
