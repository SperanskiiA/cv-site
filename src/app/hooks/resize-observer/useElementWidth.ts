import { useState, useEffect, useRef } from 'react';

export const useElementWidth = () => {
  const ref: any = useRef();
  const [width, setWidth] = useState<null | number>(null);
  const resizeObserver = useRef(
    new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      setWidth(width);
    })
  );
  useEffect(() => {
    resizeObserver.current.observe(ref.current);
  }, [ref, width]);
  return [ref, width];
};
