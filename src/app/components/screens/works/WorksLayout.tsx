import { useMediaQuery } from '@mui/material'
import React from 'react'

import { worksData } from '../../../data'
import Project from '../../elements/works-card/Project'
import { SectionLayout } from '../../layout/SectionLayout'
import styles from './Works.module.scss'
import { useInView } from 'react-intersection-observer'
import { Carousel, CarouselItem } from '../../elements'

export type visibleProps = {
    setVisible: (arg: boolean) => void
}
export const Works = React.forwardRef(
    ({ setVisible }: visibleProps, ref: React.Ref<HTMLDivElement>) => {
        const { ref: observerRef, inView } = useInView({
            threshold: 0.5,
        })

        const smallMobile = useMediaQuery('(max-width: 500px)')
        const mobile = useMediaQuery('(max-width: 700px)')
        const laptop = useMediaQuery('(max-width: 1050px)')
        const width = smallMobile ? '100%' : '90%'

        React.useEffect(() => {
            if (inView) setVisible(true)
        }, [inView])

        return (
            <div className={styles.container} ref={ref}>
                <SectionLayout
                    title="Recent Works"
                    subTitle={mobile ? '' : 'projects'}
                >
                    <div ref={observerRef} className={styles.flex}>
                        <div style={{ width: width, margin: '-100px auto 0' }}>
                            <Carousel>
                                {worksData.map(
                                    (
                                        { imgs, link, title, tools, subTitle },
                                        index
                                    ) => {
                                        const rest =
                                            index > 2
                                                ? -(index % 3) + 1
                                                : index % 3

                                        const marginTop = mobile
                                            ? 0
                                            : laptop
                                            ? `${30 + rest * -30}px`
                                            : `${rest * -35}px`

                                        return (
                                            <CarouselItem
                                                width={'50%'}
                                                key={title}
                                            >
                                                <Project
                                                    imgs={imgs}
                                                    link={link}
                                                    tools={tools}
                                                    title={title}
                                                    subTitle={subTitle}
                                                    marginTop={marginTop}
                                                />
                                            </CarouselItem>
                                        )
                                    }
                                )}
                            </Carousel>
                        </div>
                    </div>
                </SectionLayout>
            </div>
        )
    }
)
