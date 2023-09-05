import styles from './Loading.module.scss'
import { Player } from '@lottiefiles/react-lottie-player'
import * as lottie from '../../../assets/lotties/141443-two-dots-loading-loader.json'
import { motion } from 'framer-motion'
import { darkBlue, newYellow, pink, white } from '../../../assets/colors'
export const Loading = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.flex}>
                {/* <Player
                    src={lottie}
                    className={styles.lottie}
                    autoplay={true}
                    loop={true}
                /> */}

                <motion.h1
                    animate={{
                        color: [newYellow, pink, darkBlue, white],
                        rotate: 360,
                        transition: {
                            duration: 1,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            repeatType: 'loop',
                        },
                    }}
                >
                    LOADING!!!!
                </motion.h1>
            </div>
        </div>
    )
}
