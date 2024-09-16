import Text from "@/components/Text";
import styles from "../../../styles/block-pages/about-us/experience.module.css"
import Image from "next/image";
import useText from "../useText";
import AnchorButton from "@/components/AnchorButton";
import { ROUTE_ABOUTUS } from "@/utils/routes";
import useResponsive from "@/hooks/useResponsive";

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
        itemExperience7Text,
        itemExperience8Text,
        itemExperience9Text,
        itemExperience10Text,
        buttonExperienceText,
    } = useText()

    const isResponsive = useResponsive(768)

    return (
        <section className={styles.background}>
            <div className={styles.wrapper}>
                <div className={styles.container1}>
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
                <div className={styles.container2}>
                    <div className={styles.title}><Text text={titleExperienceText} /></div>
                    <div className={styles.subtitle}><Text text={subtitleExperienceText} /></div>
                    <div className={styles.text}><Text text={itemExperience1Text} /></div>
                    <div className={styles.text}><Text text={itemExperience2Text} /></div>
                    <div className={styles.text}><Text text={itemExperience3Text} /></div>
                    <div className={styles.text}><Text text={itemExperience4Text} /></div>
                    <div className={styles.text}><Text text={itemExperience5Text} /></div>
                    <div className={styles.text}><Text text={itemExperience6Text} /></div>
                    <div className={styles.text}><Text text={itemExperience7Text} /></div>
                    <div className={styles.text}><Text text={itemExperience8Text} /></div>
                    <div className={styles.text}><Text text={itemExperience9Text} /></div>
                    <div className={styles.text}><Text text={itemExperience10Text} /></div>
                    <div className={styles.button}>
                        <AnchorButton href={ROUTE_ABOUTUS}>
                            <Text text={buttonExperienceText} />
                        </AnchorButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience