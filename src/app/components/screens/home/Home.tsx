import { Grid, useMediaQuery } from '@mui/material';
import React from 'react';

import { titleData } from '../../../data';
import { Container } from '../../elements/container/Container';
import { Rounded } from '../../elements/rounded-background/RoundedBG';
import { Title } from '../../elements/title/Title';
import styles from './Home.module.scss';
import img from '../../../assets/images/portfolio-photo-title.png';
import { Avatar } from '../../elements/avatar/Avatar';
import { SectionLayout } from '../../layout/SectionLayout';

export type PopupProps = {
  handleClose: () => void;
  handleOpen: () => void;
  open: boolean;
};

export const Home: React.FC<PopupProps> = ({
  handleClose,
  handleOpen,
  open,
}) => {
  return (
    <div className={styles.container}>
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
