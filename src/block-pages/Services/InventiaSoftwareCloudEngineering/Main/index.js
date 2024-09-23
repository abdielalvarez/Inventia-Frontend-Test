import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../../styles/block-pages/services/inventiasoftware-cloudengineering/main.module.css"
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
        text: t('services.inventiasoftware-cloudengineering.block1.title'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 16 : 36,
        color: 'blackBase',
    }

    const subtitleText = {
        text: t('services.inventiasoftware-cloudengineering.block1.subtitle'),
        tag: "p",
        font: "poppinsBold",
        size: isResponsive ? 20 : 48,
        color: 'blueBase',
    }

    const descriptionText = {
        text: t('services.inventiasoftware-cloudengineering.block1.text1'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 11 : 20,
        color: 'blackBase',
    }

    const explanation1Text = {
        text: t('services.inventiasoftware-cloudengineering.block1.text2'),
        tag: "p",
        font: "poppinsMedium",
        size: isResponsive ? 13 : 24,
        color: 'blackBase',
    }

    const explanation2Text = {
        text: t('services.inventiasoftware-cloudengineering.block1.text3'),
        tag: "p",
        font: "poppinsMedium",
        size: isResponsive ? 13 : 24,
        color: 'blackBase',
    }

    const explanation3Text = {
        text: t('services.inventiasoftware-cloudengineering.block1.text4'),
        tag: "p",
        font: "poppinsMedium",
        size: isResponsive ? 13 : 24,
        color: 'blackBase',
    }

    const explanation4Text = {
        text: t('services.inventiasoftware-cloudengineering.block1.text5'),
        tag: "p",
        font: "poppinsMedium",
        size: isResponsive ? 13 : 24,
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
            <div className={styles.background2}>
                <Image
                    src="/images/services/inventiasoftware-cloudengineering/main/background.jpg"
                    alt="Cloud Engineering"
                    width={1920}
                    height={1080}
                    priority
                    layout="responsive"
                />
            </div>
            <section id={TAG_INVENTIASOFTWARE} className={styles.explanationContent}>
                <div className={styles.img1}>
                    <Image
                        src="/images/services/inventiasoftware-cloudengineering/explanation/circle.svg"
                        alt="Cloud Engineering"
                        width={isResponsive ? 104 : 312}
                        height={isResponsive ? 104 : 312}
                        priority
                    />
                </div>
                <FadeInWrapper type='fadeinright' replay={true}>
                    <div className={styles.texts}>
                        <div className={styles.textContent}>
                            <div className={styles.text}><Text text={explanation1Text} /></div>
                            <div className={styles.text}><Text text={explanation2Text} /></div>
                        </div>
                        <div className={styles.textContent}>
                            <div className={styles.text}><Text text={explanation3Text} /></div>
                        </div>
                        <div>
                            <div className={styles.text}><Text text={explanation4Text} /></div>
                        </div>
                    </div>
                </FadeInWrapper>

            </section>
        </div>
    )
}

export default Main