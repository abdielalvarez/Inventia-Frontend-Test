import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../styles/block-pages/home/aboutus.module.css"
import useResponsive from "@/hooks/useResponsive";
import { ROUTE_CONTACTUS } from "@/utils/routes";
import Image from "next/image";
import AnchorButton from "@/components/AnchorButton";
import FadeInWrapper from "@/context/wrappers/FadeInWrapper";

const AboutUs = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(920)

    const aboutText = {
        text: t('home.block8.title'),
        tag: "p",
        font: "poppinsBold",
        size: isResponsive ? 24 : 50,
        color: 'blackBase',
    }

    const descriptionText1 = [
        {
            text: t('home.block8.text1'),
            tag: "p",
            font: "poppinsLight",
            size: isResponsive ? 12 : 20,
            color: 'blackBase',
        }
    ]

    const descriptionText2 = [
        {
            text: t('home.block8.text2'),
            tag: "span",
            font: "poppinsMedium",
            size: isResponsive ? 12 : 20,
            color: 'blueBase',
        },
        {
            text: t('home.block8.text3'),
            tag: "p",
            font: "poppinsLight",
            size: isResponsive ? 12 : 20,
            color: 'blackBase',
        }
    ]

    const buttonText = {
        text: t('home.block8.button'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 12 : 16,
        color: 'whiteBase',
    }

    return (
        <section className={styles.background}>
            <Image
                src="/images/home/about-us/circle.svg"
                alt="About Us"
                width={isResponsive ? 136 : 417}
                height={isResponsive ? 134 : 409}
                priority
                className={styles.imgLeft2}
            />
            <div className={styles.wrapper}>
                <div className={styles.containerLeft1}>
                    <Image
                        src="/images/home/about-us/people1.png"
                        alt="About Us"
                        width={isResponsive ? 234 : 565}
                        height={isResponsive ? 234 : 565}
                        priority
                        className={styles.imgLeft1}
                    />
                    <FadeInWrapper className={styles.wrapper1} type='fadeinright' replay={true}>
                        <div className={styles.containerLeft2}>
                            {!isResponsive ?
                                <Image
                                    src="/images/home/about-us/line-4.svg"
                                    alt="About Us"
                                    width={185}
                                    height={1}
                                    priority
                                    className={styles.icon1}
                                /> : null
                            }
                            <Text text={aboutText} className={styles.textLeft1} />
                            <div className={styles.containerLeft3}>
                                <div>
                                    <Text texts={descriptionText1} className={styles.textLeft2} />
                                    <Text texts={descriptionText2} className={styles.textLeft3} />
                                </div>
                                <div className={styles.buttonContainer}>
                                    <AnchorButton href={ROUTE_CONTACTUS} theme="secondary">
                                        <Text text={buttonText} />
                                    </AnchorButton>
                                </div>
                            </div>
                        </div>
                    </FadeInWrapper>
                </div>
            </div>
        </section>
    )
}

export default AboutUs