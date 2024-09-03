import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../styles/block-pages/home/explanation.module.css"
import useResponsive from "@/hooks/useResponsive";
import { ROUTE_SERVICES, TAG_INVENTIAEXPERIENCE } from "@/utils/routes";
import Image from "next/image";
import Link from "next/link";

const Explanation = () => {

    const { t } = useApiContext()
    const isSmallScreen = useResponsive(920)

    const explanationText1 = [
        {
            text: t('home.block5.text1'),
            tag: "p",
            font: "poppinsLight",
            size: isSmallScreen ? 12 : 24,
            color: 'blackBase',
        },
        {
            text: t('home.block5.text2'),
            tag: "span",
            font: "poppinsSemibold",
            size: isSmallScreen ? 12 : 24,
            color: 'orangeBase',
        },
    ];

    const explanationText2 = [
        {
            text: t('home.block5.text4'),
            tag: "p",
            font: "poppinsLight",
            size: isSmallScreen ? 12 : 24,
            color: 'blackBase',
        },
        {
            text: t('home.block5.text5'),
            tag: "span",
            font: "poppinsSemibold",
            size: isSmallScreen ? 12 : 24,
            color: 'blueBase',
        },
    ];

    const experienceText1 = {
        text: t('home.block5.text3'),
        tag: "p",
        font: "poppinsSemibold",
        size: isSmallScreen ? 22 : 40,
        color: 'orangeBase',
    }

    const softwareText1 = {
        text: t('home.block5.text6'),
        tag: "p",
        font: "poppinsSemibold",
        size: isSmallScreen ? 22 : 40,
        color: 'blueBase',
    }

    return (
        <section className={styles.background}>
            <div className={styles.wrapper}>
                <div className={styles.containerLeft1}>
                    <Image
                        src="/images/home/explanation/people1.png"
                        alt="Inventia Experience"
                        width={isSmallScreen ? 180 : 530}
                        height={isSmallScreen ? 180 : 530}
                        priority
                        className={styles.imgLeft1}
                    />
                    <div className={styles.containerLeft2}>
                            <Text texts={explanationText1} className={styles.textLeft1} />
                            <Link href={`${ROUTE_SERVICES}/#${TAG_INVENTIAEXPERIENCE}`}>
                                <div className={styles.containerLeft3}>
                                    <Text text={experienceText1} className={styles.textLeft2} />
                                    <Image
                                        src="/images/home/explanation/orange-arrow.svg"
                                        alt="Inventia Experience"
                                        width={isSmallScreen ? 42 : 50}
                                        height={isSmallScreen ? 42 : 50}
                                        priority
                                        className={styles.imgLeft2}
                                    />
                                </div>
                            </Link>
                    </div>
                </div>

                <div className={styles.containerRight1}>
                    <div className={styles.containerRight2}>
                        <Text texts={explanationText2} className={styles.textRight1} />
                            <Link href={`${ROUTE_SERVICES}/#${TAG_INVENTIAEXPERIENCE}`}>
                                <div className={styles.containerRight3}>
                                    <Text text={softwareText1} className={styles.textRight2} />
                                    <Image
                                        src="/images/home/explanation/blue-arrow.svg"
                                        alt="Inventia Experience"
                                        width={isSmallScreen ? 42 : 50}
                                        height={isSmallScreen ? 42 : 50}
                                        priority
                                        className={styles.imgRight2}
                                    />
                                </div>
                            </Link>
                    </div>
                    <Image
                        src="/images/home/explanation/people2.png"
                        alt="Inventia Experience"
                        width={isSmallScreen ? 180 : 530}
                        height={isSmallScreen ? 180 : 530}
                        priority
                        className={styles.imgRight1}
                    />
                </div>
            </div>
        </section>
    )
}

export default Explanation