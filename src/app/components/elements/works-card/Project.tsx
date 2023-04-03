import { Grid, IconButton, Tooltip, Typography } from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';
import React, { useState } from 'react';
import styles from './Project.module.scss';
import img from '../../../assets/images/ecommerce-1cut.jpg';
import img2 from '../../../assets/images/ecommerce-product1.jpg';
import img3 from '../../../assets/images/ecommerce-cart.jpg';
import { workDataProps } from '../../../data';
import { darkGrey, newYellow, white } from '../../../assets/colors';

type ProjectProps = {
  title: string;
  subTitle: string;
  imgs: string[];
  tools?: string;
  link: string;
};

const Project: React.FC<workDataProps> = ({
  title,
  subTitle,
  imgs,
  tools,
  link,
}) => {
  const [index, setIndex] = useState(0);
  // const imgs = [img, img2, img3];
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div style={{ padding: '10px 20px' }}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body1">{subTitle}</Typography>
        </div>

        <div
          style={{
            display: 'flex',
          }}
        >
          <Tooltip title={`Type to visit ${title}`} placement="top">
            <IconButton
              sx={{
                width: '40px',
                height: '40px',
                alignSelf: 'center',
                backgroundColor: darkGrey,
                color: newYellow,
                '&:hover': {
                  color: '#000',
                },
              }}
              href={link}
            >
              <CallMadeIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div className={styles.flex}>
        <p>
          <b>Tools: </b>
        </p>
        {tools?.map((tool, index) => {
          return <p key={index + tool}>{tool}</p>;
        })}
      </div>
      <div className={styles.grid}>
        <div className={styles.item}>
          <img src={imgs[index]} />
        </div>
        <div onMouseEnter={() => setIndex(0)} className={styles.img1}>
          <img src={imgs[0]} />
        </div>
        <div onMouseEnter={() => setIndex(1)} className={styles.img2}>
          <img src={imgs[1]} />
        </div>
        <div onMouseEnter={() => setIndex(2)} className={styles.img3}>
          <img src={imgs[2]} />
        </div>
      </div>
    </div>
  );
};

export default Project;
