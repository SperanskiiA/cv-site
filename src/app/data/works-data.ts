import emarket from '../assets/images/ecommerce-1cut.jpg';
import emarket2 from '../assets/images/ecommerce-product1.jpg';
import emarket3 from '../assets/images/ecommerce-cart.jpg';
import blog1 from '../assets/images/main-page1.jpg';
import blog2 from '../assets/images/fullpost-page.jpg';
import blog3 from '../assets/images/account-page.jpg';
import prompts1 from '../assets/images/prompt-ocean-main-cut.jpg';
import prompts2 from '../assets/images/prompt-ocean-create-prompt-cut.jpg';
import prompts3 from '../assets/images/prompt-ocean-profile-cut.jpg';

export type workDataProps = {
  imgs: string[];
  title: string;
  subTitle: string;
  desc?: {
    short: string;
    long: string;
  };
  link: string;
  tools?: string[];
};

export const worksData: workDataProps[] = [
  {
    imgs: [blog1, blog2, blog3],
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
    link: 'https://blog-client-mern.vercel.app/',
    tools: [
      'JavaScript',
      'React',
      'Redux Toolkit',
      'Axios',
      'MUI',
      'SCSS',
      'Node',
      'Express',
      'JWT',
      'Versel',
      'Railways',
    ],
    subTitle: 'blog app on MERN stack',
  },
  {
    imgs: [emarket, emarket2, emarket3],
    title: 'Ecommerce',

    desc: {
      short: 'Sample e-commerce app on Next.js with Sanity and Stripe',
      long: 'do u wannna play or maybe u just wanna to send me all of money that u have, huh??!',
    },
    link: 'https://ecomerce-sneaker-shop.vercel.app/',
    tools: ['JavaScript', 'Next', 'Sanity', 'Stripe', 'Versel'],
    subTitle: 'ecommerce app on javascript and nextjs',
  },
  {
    imgs: [prompts1, prompts2, prompts3],
    title: 'Prompt Ocean',
    desc: {
      short: 'aksojflmaeljfsmcjmwolkcac0',
      long: '00000000',
    },
    link: 'https://prompt-ocean-f08bfgltk-speranskiia.vercel.app/',
    tools: [
      'Typescript',
      'Next',
      'Next-auth',
      'Tailwind',
      'MongoDB',
      'Google API',
      'Versel',
    ],
    subTitle: 'prompt sharing service on typescript and next 13+',
  },
];
