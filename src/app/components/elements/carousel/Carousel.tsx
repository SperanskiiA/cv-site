import React, { useEffect, useState, FunctionComponent } from 'react';
import { useSwipeable } from 'react-swipeable';
import { IconButton, Button, useMediaQuery } from '@mui/material';
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
  const mobile = useMediaQuery('(max-width: 700px)');
  const laptop = useMediaQuery('(max-width: 1050px)');

  const size = mobile ? 100 : laptop ? 50 : 33.3;
  const carouselLength = mobile ? 0 : laptop ? 1 : 3;

  const visibleItemsLength = mobile ? 1 : laptop ? 2 : 3;

  const disableBtns =
    visibleItemsLength >= React.Children.count(children) ? true : false;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - carouselLength - 1;
    } else if (newIndex >= React.Children.count(children) - carouselLength) {
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
          style={{ transform: `translate(-${activeIndex * size}%)` }}
        >
          {React.Children.map(children, (child) => {
            const item = child as React.ReactElement<
              React.PropsWithChildren<CarouselItemProps>
            >;
            return React.cloneElement(item, { width: `${size}%` });
          })}
        </div>
      </div>
      <div className={styles.outer_arrow_back}>
        <IconButton
          disabled={disableBtns}
          sx={{ padding: 0, opacity: disableBtns ? 0.4 : 1 }}
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <ArrowBackIosNewIcon className={styles.icon} fontSize="large" />
        </IconButton>
      </div>
      <div className={styles.outer_arrow_forward}>
        <IconButton
          disabled={disableBtns}
          sx={{ padding: 0, opacity: disableBtns ? 0.4 : 1 }}
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
