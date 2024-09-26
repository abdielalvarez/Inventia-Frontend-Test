import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../../styles/block-pages/services/inventiaexperience-research/main.module.css"
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
        text: t('services.inventiaexperience-research.block1.title'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 16 : 36,
        color: 'blackBase',
    }

    const subtitleText = {
        text: t('services.inventiaexperience-research.block1.subtitle'),
        tag: "p",
        font: "poppinsBold",
        size: isResponsive ? 20 : 48,
        color: 'orangeBase',
    }

    const descriptionText = [
        {
            text: t('services.inventiaexperience-research.block1.text1'),
            tag: "p",
            font: "poppinsLight",
            size: isResponsive ? 11 : 20,
            color: 'blackBase',
        },
        {
            text: t('services.inventiaexperience-research.block1.text2'),
            tag: "p",
            font: "poppinsMedium",
            size: isResponsive ? 11 : 20,
            color: 'blackBase',
        },
        {
            text: t('services.inventiaexperience-research.block1.text3'),
            tag: "p",
            font: "poppinsMedium",
            size: isResponsive ? 11 : 20,
            color: 'orangeBase',
        },
    ]

    const explanation1Text = {
        text: t('services.inventiaexperience-research.block2.text1'),
        tag: "p",
        font: "poppinsMedium",
        size: isResponsive ? 12 : 20,
        color: 'blackBase',
    }

    const explanation2Text = {
        text: t('services.inventiaexperience-research.block2.text2'),
        tag: "p",
        font: "poppinsMedium",
        size: isResponsive ? 12 : 20,
        color: 'blackBase',
    }

    const explanation3Text = {
        text: t('services.inventiaexperience-research.block2.text3'),
        tag: "p",
        font: "poppinsMedium",
        size: isResponsive ? 12 : 20,
        color: 'blackBase',
    }

    return (
        <section id={TAG_INVENTIASOFTWARE} className={styles.background}>
            <div className={styles.wrapper}>
                <div className={styles.titleContainer}>
                    <Text text={titleText} className={styles.title} />
                </div>
                <FadeInWrapper type='fadeinright' replay={true}>
                    <div className={styles.container}>
                        <div className={styles.titleContainer}>
                            <Image
                                src="/images/services/inventiaexperience-research/description/logo.svg"
                                alt="Inventia"
                                width={isResponsive ? 28 : 53}
                                height={isResponsive ? 34 : 64}
                                priority
                                className={styles.logo}
                            />
                            <div>
                                <Text text={subtitleText} className={styles.title2} />
                            </div>
                        </div>
                        <div className={styles.descriptionContainer}>
                            <Text texts={descriptionText} className={styles.description} />
                        </div>
                    </div>
                </FadeInWrapper>
                <div className={styles.texts}>
                    <FadeInWrapper type='fadeinup' replay={true}>
                        <div className={styles.textContent}>
                            <Image
                                src="/images/services/inventiaexperience-research/explanation/person.svg"
                                alt="Better client understanding"
                                width={isResponsive ? 104 : 214}
                                height={isResponsive ? 104 : 214}
                                priority
                            />
                            <div className={styles.text}><Text text={explanation1Text} /></div>
                        </div>
                    </FadeInWrapper>
                    <FadeInWrapper type='fadeinup' replay={true}>
                        <div className={styles.textContent}>
                            <Image
                                src="/images/services/inventiaexperience-research/explanation/chat.svg"
                                alt="Better client understanding"
                                width={isResponsive ? 104 : 214}
                                height={isResponsive ? 104 : 214}
                                priority
                            />
                            <div className={styles.text}><Text text={explanation2Text} /></div>
                        </div>
                    </FadeInWrapper>
                    <FadeInWrapper type='fadeinup' replay={true}>
                        <div className={styles.textContent}>
                            <Image
                                src="/images/services/inventiaexperience-research/explanation/light.svg"
                                alt="Better client understanding"
                                width={isResponsive ? 104 : 214}
                                height={isResponsive ? 104 : 214}
                                priority
                            />
                            <div className={styles.text}><Text text={explanation3Text} /></div>
                        </div>
                    </FadeInWrapper>
                </div>
            </div>
        </section>
    )
}

export default Main