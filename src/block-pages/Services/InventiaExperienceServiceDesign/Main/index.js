import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../../styles/block-pages/services/inventiaexperience-servicedesign/main.module.css"
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
        text: t('services.inventiaexperience-servicedesign.block1.title'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 16 : 36,
        color: 'blackBase',
    }

    const subtitleText = {
        text: t('services.inventiaexperience-servicedesign.block1.subtitle'),
        tag: "p",
        font: "poppinsBold",
        size: isResponsive ? 20 : 48,
        color: 'orangeBase',
    }

    const descriptionText = {
        text: t('services.inventiaexperience-servicedesign.block1.text1'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 11 : 20,
        color: 'blackBase',
    }

    const explanationText = {
        text: t('services.inventiaexperience-servicedesign.block2.text1'),
        tag: "p",
        font: isResponsive ? "poppinsLight" : "poppinsMedium",
        size: isResponsive ? 11 : 25,
        color: 'blackBase',
    }

    return (
        <section id={TAG_INVENTIASOFTWARE} className={styles.background}>
            <div className={styles.wrapper}>
                <div className={styles.titleContainer}>
                    <Text text={titleText} className={styles.title} />
                </div>
                <FadeInWrapper type='fadeindown' replay={true}>
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
                <FadeInWrapper type='fadeinright' replay={true}>
                    <div className={styles.content}>
                        <div className={styles.contentInfo1}>
                            <div className={styles.text}><Text text={explanationText} /></div>
                        </div>
                        <div className={styles.contentInfo2}>
                            <Image
                                src="/images/services/inventiaexperience-servicedesign/description/settings.svg"
                                alt="Settings"
                                width={isResponsive ? 104 : 385}
                                height={isResponsive ? 104 : 385}
                                priority
                                className={styles.img1}
                            />
                            <Image
                                src="/images/services/inventiaexperience-servicedesign/description/location.svg"
                                alt="Location"
                                width={isResponsive ? 104 : 385}
                                height={isResponsive ? 104 : 385}
                                priority
                            />
                        </div>
                    </div>
                </FadeInWrapper>
            </div>
        </section>
    )
}

export default Main