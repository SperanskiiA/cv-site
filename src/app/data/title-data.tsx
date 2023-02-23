import React from 'react';
import { HTML, JS, REACT, REDUX, SASS, TS } from '../assets/icons';

export type TitleProps = {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

export const titleData: TitleProps[] = [
  {
    icon: TS,
  },
  {
    icon: JS,
  },
  {
    icon: REACT,
  },
  {
    icon: REDUX,
  },
  {
    icon: HTML,
  },
  {
    icon: SASS,
  },
];
