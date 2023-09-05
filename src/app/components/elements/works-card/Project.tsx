import {
    ButtonBase,
    Grid,
    IconButton,
    StyledEngineProvider,
    Tooltip,
    Typography,
} from '@mui/material'
import CallMadeIcon from '@mui/icons-material/CallMade'
import React, { useState } from 'react'
import styles from './Project.module.scss'

import { darkGrey, newYellow, white } from '../../../assets/colors'
import { easeInOut, motion } from 'framer-motion'

type ProjectProps = {
    title: string
    subTitle: string
    imgs: string[]
    tools?: string[]
    link: string
    marginTop?: string | number
}

const Project: React.FC<ProjectProps> = ({
    title,
    subTitle,
    imgs,
    tools,
    link,
    marginTop,
}) => {
    const [index, setIndex] = useState(0)

    return (
        <StyledEngineProvider injectFirst>
            <motion.div
                className={styles.wrapper}
                initial={{ translateY: 0 }}
                whileInView={{ translateY: marginTop }}
                transition={{
                    delay: 0.4,
                    duration: 0.4,
                    type: easeInOut,
                }}
                viewport={{ once: true }}
            >
                <div className={styles.content}>
                    <div style={{ padding: '10px 20px' }}>
                        <Typography variant="h4" sx={{ paddingBottom: '8px' }}>
                            {title}
                        </Typography>
                        <Typography variant="body1">{subTitle}</Typography>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                        }}
                    >
                        <Tooltip
                            title={`Type to visit ${title}`}
                            placement="top"
                        >
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
                        return <p key={index + tool}>{tool}</p>
                    })}
                </div>
                <div className={styles.grid}>
                    <ButtonBase
                        target="_blank"
                        href={link}
                        className={styles.item}
                    >
                        <img src={imgs[index]} />
                    </ButtonBase>

                    <div
                        onMouseEnter={() => setIndex(0)}
                        className={styles.img1}
                    >
                        <img src={imgs[0]} />
                    </div>
                    <div
                        onMouseEnter={() => setIndex(1)}
                        className={styles.img2}
                    >
                        <img src={imgs[1]} />
                    </div>
                    <div
                        onMouseEnter={() => setIndex(2)}
                        className={styles.img3}
                    >
                        <img src={imgs[2]} />
                    </div>
                </div>
            </motion.div>
        </StyledEngineProvider>
    )
}

export default Project
