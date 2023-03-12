import blog from '../assets/images/blog-mobile.jpg';
export type workDataProps = {
  img: string;
  title: string;
  desc: {
    short: string;
    long: string;
  };
  link: string;
};

export const worksData: workDataProps[] = [
  {
    img: blog,
    title: 'Blog app',
    desc: {
      short: ` Blog app on MERN stack.
 Server tools: Node, Express, JWT, Bcrypt, Multer.
 Client tools: React, Redux toolkit, Axios, MUI, SCSS`,
      long: ` There is a simple blog app on MERN stack. 
 This app allow you
register an account and login later, add posts and comments, and
manage your profile, posts and comments as well. 
 Server side was
created with Node and Express, as data base here used MongoDB.
 Authorization created with JWT, and BCRYPT to hash passwords,
uploading images made with Multer. 
 Client side was create with
React, as state manager here used Redux Toolkit, dezign created
with MUI and SCSS.`,
    },
    link: '/',
  },
  {
    img: blog,
    title: 'Chess App',
    desc: {
      short: 'Why dont we play chess ?',
      long: 'do u wannna play or maybe u just wanna to send me all of money that u have, huh??!',
    },
    link: '/',
  },
];
