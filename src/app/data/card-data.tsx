import React from 'react';
import {
  CSS,
  REACT,
  REDUX,
  Express,
  Framer,
  HTML,
  JS,
  MUI,
  Mongo,
  NodeJS,
  Reactrouter,
  SASS,
  TS,
} from '../assets/icons';

type cardProps = {
  title: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

export const cardData: cardProps[] = [
  {
    title: 'CSS3',
    icon: CSS,
  },
  {
    title: 'React',
    icon: REACT,
  },
  {
    title: 'TypeScript',
    icon: TS,
  },
  {
    title: 'JavaScript',
    icon: JS,
  },
  {
    title: 'Node',
    icon: NodeJS,
  },
  {
    title: 'Redux',
    icon: REDUX,
  },
  {
    title: 'Express',
    icon: Express,
  },
  {
    title: 'HTML',
    icon: HTML,
  },
  {
    title: 'Material',
    icon: MUI,
  },
  {
    title: 'Motions',
    icon: Framer,
  },
  {
    title: 'MongoDB',
    icon: Mongo,
  },
  {
    title: 'SCSS',
    icon: SASS,
  },
];

export const Holder = ({ children }: any) => {
  return <span>{children}</span>;
};
