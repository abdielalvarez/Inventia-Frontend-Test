import Text from "@/components/Text";
import styles from "../../../styles/block-pages/about-us/experience.module.css"
import Image from "next/image";
import useText from "../useText";
import AnchorButton from "@/components/AnchorButton";
import { ROUTE_ABOUTUS, TAG_JOIN_TEAM } from "@/utils/routes";
import useResponsive from "@/hooks/useResponsive";
import FadeInWrapper from "@/context/wrappers/FadeInWrapper";

const Experience = () => {

    const {
        titleExperienceText,
        subtitleExperienceText,
        itemExperience1Text,
        itemExperience2Text,
        itemExperience3Text,
        itemExperience4Text,
        itemExperience5Text,
        itemExperience6Text,
        buttonExperienceText,
    } = useText()

    const isResponsive = useResponsive(768)

    return (
        <section className={styles.background}>
            <div className={styles.wrapper}>
                <FadeInWrapper type='fadeindown' replay={true}>
                    <div className={styles.container1}>
                        <div className={styles.line} />
                        <Image
                            src="/images/about-us/experience/icon1.png"
                            alt="Experience"
                            width={isResponsive ? 90 : 189}
                            height={isResponsive ? 90 : 189}
                            priority
                            className={styles.img}
                        />
                        <Image
                            src="/images/about-us/experience/icon2.png"
                            alt="Experience"
                            width={isResponsive ? 90 : 189}
                            height={isResponsive ? 90 : 189}
                            priority
                            className={styles.img}
                        />
                        <Image
                            src="/images/about-us/experience/icon3.png"
                            alt="Experience"
                            width={isResponsive ? 90 : 189}
                            height={isResponsive ? 90 : 189}
                            priority
                            className={styles.img}
                        />
                    </div>
                </FadeInWrapper>
                <div className={styles.container2}>
                    <div className={styles.title}><Text text={titleExperienceText} /></div>
                    <div className={styles.subtitle}><Text text={subtitleExperienceText} /></div>
                    <div className={styles.box}>
                        <div className={styles.text}><Text text={itemExperience1Text} /></div>
                        <div className={styles.text}><Text text={itemExperience2Text} /></div>
                        <div className={styles.text}><Text text={itemExperience3Text} /></div>
                        <div className={styles.text}><Text text={itemExperience4Text} /></div>
                        <div className={styles.text}><Text text={itemExperience5Text} /></div>
                        <div className={styles.text}><Text text={itemExperience6Text} /></div>
                    </div>
                    <div className={styles.button}>
                        <AnchorButton className={styles.buttonItem} href={`${ROUTE_ABOUTUS}#${TAG_JOIN_TEAM}`}>
                            <Text text={buttonExperienceText} />
                        </AnchorButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience