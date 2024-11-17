import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../../styles/block-pages/services/inventiasoftware-devopsimplementation/main.module.css"
import useResponsive from "@/hooks/useResponsive";
import {
    TAG_INVENTIASOFTWARE
} from "@/utils/routes";
import Image from "next/image";
import FadeInWrapper from "@/context/wrappers/FadeInWrapper";

const Main = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(768)

    const titleText = {
        text: t('services.inventiasoftware-devopsimplementation.block1.title'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 16 : 36,
        color: 'blackCaption',
    }

    const subtitleText = {
        text: t('services.inventiasoftware-devopsimplementation.block1.subtitle'),
        tag: "p",
        font: "poppinsBold",
        size: isResponsive ? 20 : 48,
        color: 'blueBase',
    }

    const descriptionText = {
        text:
            isResponsive ?
            t('services.inventiasoftware-devopsimplementation.block1.text1-mobile') :
            t('services.inventiasoftware-devopsimplementation.block1.text1'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 11 : 20,
        color: 'blackBase',
    }

    const explanation1Text = {
        text:
            isResponsive ?
            t('services.inventiasoftware-devopsimplementation.block1.text2-mobile') :
            t('services.inventiasoftware-devopsimplementation.block1.text2'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 12 : 25,
        color: 'blackBase',
    }

    const explanation2Text = {
        text:
            isResponsive ?
            t('services.inventiasoftware-devopsimplementation.block1.text3-mobile') :
            t('services.inventiasoftware-devopsimplementation.block1.text3'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 12 : 25,
        color: 'blackBase',
    }

    const explanation3Text = {
        text:
            isResponsive ?
            t('services.inventiasoftware-devopsimplementation.block1.text4-mobile') :
            t('services.inventiasoftware-devopsimplementation.block1.text4'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 12 : 25,
        color: 'blackBase',
    }

    const explanation4Text = {
        text:
            isResponsive ?
            t('services.inventiasoftware-devopsimplementation.block1.text5-mobile') :
            t('services.inventiasoftware-devopsimplementation.block1.text5'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 12 : 25,
        color: 'blackBase',
    }

    const explanation5Text = {
        text:
            isResponsive ?
            t('services.inventiasoftware-devopsimplementation.block1.text6-mobile') :
            t('services.inventiasoftware-devopsimplementation.block1.text6'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 12 : 25,
        color: 'blackBase',
    }

    return (
        <div>
            <section id={TAG_INVENTIASOFTWARE} className={styles.background}>
                <div className={styles.wrapper}>
                    <div className={styles.titleContainer}>
                        <Text text={titleText} className={styles.title} />
                    </div>
                    <FadeInWrapper type='fadeinright' replay={true}>
                        <div className={styles.container}>
                            <div className={styles.titleContainer}>
                                <div>
                                    <Text text={subtitleText} className={styles.title} />
                                </div>
                            </div>
                            <div className={styles.descriptionContainer}>
                                <Text text={descriptionText} className={styles.description} />
                            </div>
                        </div>
                    </FadeInWrapper>
                </div>
            </section>
            <section id={TAG_INVENTIASOFTWARE} className={styles.wrapper2}>
                <div className={styles.img1}>
                    <Image
                        src="/images/services/inventiasoftware-devopsimplementation/explanation/process.svg"
                        alt="Devops Implementation"
                        width={isResponsive ? 127 : 469}
                        height={isResponsive ? 66 : 244}
                        priority
                    />
                </div>
                <FadeInWrapper type='fadeinright' replay={true}>
                    <div className={styles.texts}>
                        <div className={styles.textContent}>
                            <div className={styles.text}><Text text={explanation1Text} /></div>
                        </div>
                        <div className={styles.textContent}>
                            <div className={styles.text}><Text text={explanation2Text} /></div>
                        </div>
                        <div className={styles.textContent}>
                            <div className={styles.text}><Text text={explanation3Text} /></div>
                        </div>
                        <div className={styles.textContent}>
                            <div className={styles.text}><Text text={explanation4Text} /></div>
                        </div>
                        <div className={styles.textContent}>
                            <div className={styles.text}><Text text={explanation5Text} /></div>
                        </div>
                    </div>
                </FadeInWrapper>
            </section>
            <div className={styles.background2}>
                <Image
                    src="/images/services/inventiasoftware-devopsimplementation/main/background.jpg"
                    alt="Devops Implementation"
                    width={1920}
                    height={1080}
                    priority
                    layout="responsive"
                />
            </div>
        </div>
    )
}

export default Main