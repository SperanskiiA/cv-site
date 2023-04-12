import { useMediaQuery } from '@mui/material';
import React from 'react';

import { worksData } from '../../../data';
import Project from '../../elements/works-card/Project';
import { SectionLayout } from '../../layout/SectionLayout';
import styles from './Works.module.scss';
import { useInView } from 'react-intersection-observer';

export type visibleProps = {
  setVisible: (arg: boolean) => void;
};
export const Works = React.forwardRef(
  ({ setVisible }: visibleProps, ref: React.Ref<HTMLDivElement>) => {
    const { ref: observerRef, inView } = useInView({
      threshold: 0.5,
    });

    React.useEffect(() => {
      if (inView) setVisible(true);
    }, [inView]);
    const isMobile = useMediaQuery('(max-width: 820px)');

    return (
      <div className={styles.container} ref={ref}>
        <SectionLayout
          title="Recent Works"
          subTitle={isMobile ? '' : 'projects'}
        >
          <div ref={observerRef} className={styles.flex}>
            {worksData.map(({ imgs, link, title, tools, subTitle }, index) => {
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
  }
);
