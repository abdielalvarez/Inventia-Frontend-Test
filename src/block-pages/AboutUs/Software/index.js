import Text from "@/components/Text";
import styles from "../../../styles/block-pages/about-us/software.module.css"
import Image from "next/image";
import useText from "../useText";
import AnchorButton from "@/components/AnchorButton";
import { ROUTE_ABOUTUS } from "@/utils/routes";
import useResponsive from "@/hooks/useResponsive";
import FadeInWrapper from "@/context/wrappers/FadeInWrapper";

const Software = () => {

    const {
        titleSoftwareText,
        subtitleSoftwareText,
        itemSoftware1Text,
        itemSoftware2Text,
        itemSoftware3Text,
        itemSoftware4Text,
        itemSoftware5Text,
        itemSoftware6Text,
        itemSoftware7Text,
        itemSoftware8Text,
        itemSoftware9Text,
        buttonSoftwareText
    } = useText()

    const isResponsive = useResponsive(768)

    return (
        <section className={styles.background}>
            <div className={styles.wrapper}>
                <FadeInWrapper type='fadeindown' replay={true}>
                    <div className={styles.container1}>
                        <div className={styles.line} />
                        <Image
                            src="/images/about-us/software/icon1.png"
                            alt="Software"
                            width={isResponsive ? 90 : 189}
                            height={isResponsive ? 90 : 189}
                            priority
                            className={styles.img}
                        />
                        <Image
                            src="/images/about-us/software/icon2.png"
                            alt="Software"
                            width={isResponsive ? 90 : 189}
                            height={isResponsive ? 90 : 189}
                            priority
                            className={styles.img}
                        />
                        <Image
                            src="/images/about-us/software/icon3.png"
                            alt="Software"
                            width={isResponsive ? 90 : 189}
                            height={isResponsive ? 90 : 189}
                            priority
                            className={styles.img}
                        />
                    </div>
                </FadeInWrapper>
                <div className={styles.container2}>
                    <div className={styles.title}><Text text={titleSoftwareText} /></div>
                    <div className={styles.subtitle}><Text text={subtitleSoftwareText} /></div>
                    <div className={styles.text}><Text text={itemSoftware1Text} /></div>
                    <div className={styles.text}><Text text={itemSoftware2Text} /></div>
                    <div className={styles.text}><Text text={itemSoftware3Text} /></div>
                    <div className={styles.text}><Text text={itemSoftware4Text} /></div>
                    <div className={styles.text}><Text text={itemSoftware5Text} /></div>
                    <div className={styles.text}><Text text={itemSoftware6Text} /></div>
                    <div className={styles.text}><Text text={itemSoftware7Text} /></div>
                    <div className={styles.text}><Text text={itemSoftware8Text} /></div>
                    <div className={styles.text}><Text text={itemSoftware9Text} /></div>
                    <div className={styles.button}>
                        <AnchorButton theme="secondary" href={ROUTE_ABOUTUS}>
                            <Text text={buttonSoftwareText} />
                        </AnchorButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Software