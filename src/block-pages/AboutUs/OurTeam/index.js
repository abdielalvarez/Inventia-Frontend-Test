import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../styles/block-pages/about-us/ourteam.module.css"
import useResponsive from "@/hooks/useResponsive";
import Image from "next/image";
import FadeInWrapper from "@/context/wrappers/FadeInWrapper";

const OurTeam = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(768)

    const titleText = {
        text: t('about-us.block1.title'),
        tag: "p",
        font: "poppinsBold",
        size: isResponsive ? 24 : 40,
        color: 'blackBase',
    }

    const descriptionText = {
        text: t('about-us.block1.subtitle'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 13 : 24,
        color: 'blackBase',
    }

    const experienceText = {
        text: t('about-us.block1.text1'),
        tag: "p",
        font: isResponsive ? "poppinsSemibold" : "poppinsBold",
        size: isResponsive ? 24 : 48,
        color: isResponsive ? 'blackBase' : 'orangeBase',
    }

    const softwareText = {
        text: t('about-us.block1.text1'),
        tag: "p",
        font: isResponsive ? "poppinsSemibold" : "poppinsBold",
        size: isResponsive ? 24 : 48,
        color: isResponsive ? 'blackBase' : 'blueBase',
    }

    return (
        <FadeInWrapper type='fadeindown' replay={true}>
            <section className={styles.background}>
                {isResponsive ?
                    <Image
                        src="/images/about-us/main/circle.svg"
                        alt="About Us"
                        width={50}
                        height={50}
                        priority
                        className={styles.img}
                    /> : null
                }
                <div className={styles.wrapper}>
                    <div className={styles.container1}>
                        <div className={styles.title}><Text text={titleText} /></div>
                        <div><Text text={descriptionText} /></div>
                    </div>
                    <div className={styles.container2}>
                        <div className={styles.text}><Text text={experienceText} /></div>
                        <div><Text text={softwareText} /></div>
                    </div>
                </div>
            </section>
        </FadeInWrapper>
    )
}

export default OurTeam