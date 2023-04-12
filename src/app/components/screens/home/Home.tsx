import React from 'react';

import { Title } from '../../elements/title/Title';
import styles from './Home.module.scss';
import img from '../../../assets/images/portfolio-photo-title.png';
import { Avatar } from '../../elements/avatar/Avatar';
import { SectionLayout } from '../../layout/SectionLayout';
import { visibleProps } from '../works/WorksLayout';
import { useInView } from 'react-intersection-observer';

export type PopupProps = {
  handleClose: () => void;
  handleOpen: () => void;
  open: boolean;
};

type homeProps = PopupProps & visibleProps;

export const Home: React.FC<homeProps> = ({
  handleClose,
  handleOpen,
  open,
  setVisible,
}) => {
  const { ref: observerRef, inView } = useInView({
    threshold: 0.3,
  });

  React.useEffect(() => {
    if (inView) setVisible(false);
  }, [inView]);

  return (
    <div className={styles.container} ref={observerRef}>
      <SectionLayout
        title="Hello world!"
        subTitle="greetings!"
        desc="  I'm web developer with about 1.5 years of expirience. And I really
        like that I do!"
        open={open}
      >
        <div className={styles.flex}>
          <div>
            <Title
              handleClose={handleClose}
              handleOpen={handleOpen}
              open={open}
            />
          </div>

          <div className={styles.avatar}>
            <Avatar img={img} />
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};
