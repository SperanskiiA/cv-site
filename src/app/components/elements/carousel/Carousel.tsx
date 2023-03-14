import React, { useEffect, useState, FunctionComponent } from 'react';
import { useSwipeable } from 'react-swipeable';
import { IconButton, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import styles from './Carousel.module.scss';

interface CarouselItemProps {
  children?: React.ReactNode;
  width: string | number;
}
export const CarouselItem: FunctionComponent<CarouselItemProps> = ({
  children,
  width,
}) => {
  return (
    <div className={styles.carousel_item} style={{ width: width }}>
      {children}
    </div>
  );
};

export const Carousel = ({ children }: { children: React.ReactNode }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 2500);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });
  return (
    <div className={styles.outer}>
      <div
        className={styles.carousel}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        {...handlers}
      >
        <div
          className={styles.carousel_inner}
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(children, (child) => {
            const item = child as React.ReactElement<
              React.PropsWithChildren<CarouselItemProps>
            >;
            return React.cloneElement(item, { width: '100%' });
          })}
        </div>
      </div>
      <div className={styles.outer_arrow_back}>
        <IconButton
          sx={{ padding: 0 }}
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <ArrowBackIosNewIcon className={styles.icon} fontSize="large" />
        </IconButton>
      </div>
      <div className={styles.outer_arrow_forward}>
        <IconButton
          sx={{ padding: 0 }}
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <ArrowForwardIosIcon className={styles.icon} fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};
