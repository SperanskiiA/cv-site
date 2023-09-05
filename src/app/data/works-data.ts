import {
    nike1,
    nike2,
    nike3,
    blog1,
    blog2,
    blog3,
    prompt1,
    prompt2,
    prompt3,
    ecommerce1,
    ecommerce2,
    ecommerce3,
    flexible1,
    flexible2,
    flexible3,
} from '../assets/images'

export type workDataProps = {
    imgs: string[]
    title: string
    subTitle: string
    desc?: {
        short: string
        long: string
    }
    link: string
    tools?: string[]
}

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
        imgs: [ecommerce1, ecommerce2, ecommerce3],
        title: 'Ecommerce',

        desc: {
            short: 'Sample e-commerce app on Next.js with Sanity and Stripe',
            long: 'do u wannna play or maybe u just wanna to send me all of money that u have, huh??!',
        },
        link: 'https://ecomerce-sneaker-shop.vercel.app/',
        tools: ['JavaScript', 'Next.js', 'Sanity', 'Stripe', 'Versel'],
        subTitle: 'ecommerce app on javascript and nextjs',
    },
    {
        imgs: [prompt1, prompt2, prompt3],
        title: 'Prompt Ocean',

        link: 'https://prompt-ocean-f08bfgltk-speranskiia.vercel.app/',
        tools: [
            'Typescript',
            'Next.js',
            'Next-auth',
            'Tailwind',
            'MongoDB',
            'Google API',
            'Versel',
        ],
        subTitle: 'prompt sharing service on typescript and next 13+',
    },
    {
        imgs: [flexible1, flexible2, flexible3],
        title: 'Dribbble clone',

        link: 'https://dribbble-clone-kappa.vercel.app/',
        tools: [
            'Next.js',
            'GraphQL',
            'Grafbase',
            'TypeScript',
            'Next-auth',
            'Google API',
            'Versel',
            'Tailwind',
        ],
        subTitle: 'dribbble clone on next 13, typescript and graphql',
    },
    {
        imgs: [nike1, nike2, nike3],
        title: 'Nike landing page',

        link: 'https://nike-concept-store.vercel.app',
        tools: ['React', 'Tailwind', 'JavaScript'],
        subTitle: 'Nike landing page on React',
    },
]
