import Typography from '@mui/material/Typography/Typography';
import React from 'react';
import styles from './ExpirienceItem.module.scss';

type ExpirienceItem = {
  date: string;
  title: string;
  company: string;
};

const ExpirienceItem: React.FC<ExpirienceItem> = ({ date, title, company }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div style={{ width: '25%' }}>
          <Typography className={styles.date}>{date}</Typography>
        </div>
        <div style={{ width: '75%' }}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body1">{company}</Typography>
        </div>
      </div>
    </div>
  );
};

export default ExpirienceItem;
