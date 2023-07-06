import { useMediaQuery } from '@mui/material';
import React from 'react';

import { worksData } from '../../../data';
import Project from '../../elements/works-card/Project';
import { SectionLayout } from '../../layout/SectionLayout';
import styles from './Works.module.scss';
import { useInView } from 'react-intersection-observer';
import { Carousel, CarouselItem } from '../../elements';

export type visibleProps = {
  setVisible: (arg: boolean) => void;
};
export const Works = React.forwardRef(
  ({ setVisible }: visibleProps, ref: React.Ref<HTMLDivElement>) => {
    const { ref: observerRef, inView } = useInView({
      threshold: 0.5,
    });

    const mobile = useMediaQuery('(max-width: 700px)');
    const laptop = useMediaQuery('(max-width: 1050px)');

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
            <div style={{ width: '90%', margin: '-100px auto 0' }}>
              <Carousel>
                {worksData.map(
                  ({ imgs, link, title, tools, subTitle }, index) => {
                    const marginTop = mobile
                      ? 0
                      : laptop
                      ? `${30 + index * -30}px`
                      : `${index * -50}px`;

                    return (
                      <CarouselItem width={'50%'} key={title}>
                        <Project
                          imgs={imgs}
                          link={link}
                          tools={tools}
                          title={title}
                          subTitle={subTitle}
                          marginTop={marginTop}
                        />
                      </CarouselItem>
                    );
                  }
                )}
              </Carousel>
            </div>
            {/* {worksData.map(({ imgs, link, title, tools, subTitle }, index) => {
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
            })} */}
          </div>
        </SectionLayout>
      </div>
    );
  }
);
