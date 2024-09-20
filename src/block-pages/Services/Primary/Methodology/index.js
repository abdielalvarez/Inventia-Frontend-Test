import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../../styles/block-pages/services/primary/methodology.module.css"
import useResponsive from "@/hooks/useResponsive";
import {
    TAG_INVENTIASOFTWARE
} from "@/utils/routes";
import { useState } from "react";

const Methodology = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(768)

    const titleText = {
        text: t('services.primary.block5.title'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 24 : 64,
        color: 'blackBase',
    }

    const descriptionText = {
        text: t('services.primary.block5.subtitle'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 11 : 20,
        color: 'blackBase',
    }

    const empathyText = {
        text: t('services.primary.block5.text1'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 15 : 32,
        color: 'whiteBase',
    }

    const empathyDescriptionText = {
        text: t('services.primary.block5.description1'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 15 : 25,
        color: 'blackBase',
    }

    const definitionText = {
        text: t('services.primary.block5.text2'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 15 : 32,
        color: 'whiteBase',
    }

    const definitionDescriptionText = {
        text: t('services.primary.block5.description2'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 15 : 25,
        color: 'blackBase',
    }

    const ideaText = {
        text: t('services.primary.block5.text3'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 15 : 32,
        color: 'whiteBase',
    }

    const ideaDescriptionText = {
        text: t('services.primary.block5.description3'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 15 : 25,
        color: 'blackBase',
    }

    const prototypeText = {
        text: t('services.primary.block5.text4'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 15 : 32,
        color: 'whiteBase',
    }

    const prototypeDescriptionText = {
        text: t('services.primary.block5.description4'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 15 : 25,
        color: 'blackBase',
    }

    const [hover, setHover] = useState({
        empathyHover: false,
        descriptionHover: false,
        ideaHover: false,
        prototypeHover: false
    })

    const handleHoverOpen = (hoverName) => {
        setHover({
            ...hover,
            [hoverName]: true,
        });
    };

    const handleHoverClose = (hoverName) => {
        setHover({
            ...hover,
            [hoverName]: false
        });
    };

    const handleClick = (hoverName) => {
        setHover({
            ...hover,
            [hoverName]: !hover[hoverName]
        });
    }

    return (
        <section id={TAG_INVENTIASOFTWARE} className={styles.background}>
            <div className={styles.wrapper}>
                <div className={styles.titleContainer}>
                    <Text text={titleText} className={styles.title} />
                </div>
                <div className={styles.descriptionContainer}>
                    <Text text={descriptionText} className={styles.description} />
                </div>
            </div>
            <div className={styles.container}>
                <div
                    className={styles.textContainer1}
                    onMouseEnter={() => handleHoverOpen('empathyHover')}
                    onMouseLeave={() => handleHoverClose('empathyHover')}
                    onClick={() => handleClick('empathyHover')}
                >
                    {hover.empathyHover ?
                        <>
                            {!isResponsive ?
                                <div className={styles.description1}>
                                    <Text text={empathyDescriptionText} />
                                </div> : null
                            }
                        </> : null
                    }
                    <div className={styles.text1}>
                        <Text text={empathyText} />
                    </div>
                </div>
                {hover.descriptionHover ?
                    <>
                        {isResponsive ?
                            <div className={styles.description1}>
                                <Text text={empathyDescriptionText} />
                            </div> : null
                        }
                    </> : null
                }
                <div
                    className={styles.textContainer2}
                    onMouseEnter={() => handleHoverOpen('descriptionHover')}
                    onMouseLeave={() => handleHoverClose('descriptionHover')}
                    onClick={() => handleClick('descriptionHover')}
                >
                    {hover.descriptionHover ?
                        <>
                            {!isResponsive ?
                                <div className={styles.description2}>
                                    <Text text={definitionDescriptionText} />
                                </div> : null
                            }
                        </> : null}

                    <div className={styles.text2}><Text text={definitionText} /></div>
                </div>
                {hover.empathyHover ?
                    <>
                        {isResponsive ?
                            <div className={styles.description2}>
                                <Text text={definitionDescriptionText} />
                            </div> : null
                        }
                    </> : null
                }
                <div
                    className={styles.textContainer3}
                    onMouseEnter={() => handleHoverOpen('ideaHover')}
                    onMouseLeave={() => handleHoverClose('ideaHover')}
                    onClick={() => handleClick('ideaHover')}
                >
                    {hover.ideaHover ?
                        <>
                            {!isResponsive ?
                                <div className={styles.description3}>
                                    <Text text={ideaDescriptionText} />
                                </div> : null
                            }
                        </> : null}
                    <div className={styles.text3}><Text text={ideaText} /></div>
                </div>
                {hover.ideaHover ?
                    <>
                        {isResponsive ?
                            <div className={styles.description3}>
                                <Text text={ideaDescriptionText} />
                            </div> : null
                        }
                    </> : null}
                <div
                    className={styles.textContainer4}
                    onMouseEnter={() => handleHoverOpen('prototypeHover')}
                    onMouseLeave={() => handleHoverClose('prototypeHover')}
                    onClick={() => handleClick('prototypeHover')}
                >
                    {hover.prototypeHover ?
                        <>
                            {!isResponsive ?
                                <div className={styles.description4}>
                                    <Text text={prototypeDescriptionText} />
                                </div> : null
                            }
                        </> : null}
                    <div className={styles.text4}><Text text={prototypeText} /></div>
                </div>
                {hover.prototypeHover ?
                    <>
                        {isResponsive ?
                            <div className={styles.description4}>
                                <Text text={prototypeDescriptionText} />
                            </div> : null
                        }
                    </> : null}
            </div>
        </section>
    )
}

export default Methodology