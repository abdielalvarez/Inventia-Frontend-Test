import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../../styles/block-pages/services/primary/experience.module.css"
import useResponsive from "@/hooks/useResponsive";
import {
    ROUTE_SERVICES_INVENTIAEXPERIENCE_PRODUCTDESIGN,
    ROUTE_SERVICES_INVENTIAEXPERIENCE_RESEARCH,
    ROUTE_SERVICES_INVENTIAEXPERIENCE_SERVICEDESIGN,
    TAG_INVENTIAEXPERIENCE,
} from "@/utils/routes";
import AnchorButton from "@/components/AnchorButton";
import Image from "next/image";
import Link from "next/link";

const Experience = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(768)

    const titleText = {
        text: t('services.primary.block2.title'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 24 : 64,
        color: 'whiteBase',
    }

    const descriptionText = {
        text: t('services.primary.block2.text1'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 11 : 20,
        color: 'whiteBase',
    }

    const buttonText = {
        text: t('services.primary.block2.button'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 10 : 20,
        color: 'blackBase',
    }

    const option1Text = {
        text: t('services.primary.block2.text2'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 15 : 40,
        color: 'whiteBase',
    }

    const option2Text = {
        text: t('services.primary.block2.text3'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 15 : 40,
        color: 'whiteBase',
    }

    const option3Text = {
        text: t('services.primary.block2.text4'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 15 : 40,
        color: 'whiteBase',
    }

    return (
        <section id={TAG_INVENTIAEXPERIENCE} className={styles.background}>
            <div className={styles.wrapper}>
                <div className={styles.textContainer}>
                    <div className={styles.titleContainer}>
                        <Text text={titleText} className={styles.title}/>
                    </div>
                    <div className={styles.descriptionContainer}><Text text={descriptionText} /></div>
                    {isResponsive ? null :
                        <div>
                            <AnchorButton
                                responsiveBreakpoint={768}
                                theme="tertiary"
                                type="submit"
                            >
                                <Text text={buttonText} />
                            </AnchorButton>
                        </div>
                    }
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.texts}>
                        <div className={styles.textContent}>
                            <Link href={ROUTE_SERVICES_INVENTIAEXPERIENCE_RESEARCH}>
                                <div className={styles.text}><Text text={option1Text} className={styles.item} /></div>
                                <Image
                                    src="/images/services/primary/experience/arrow.svg"
                                    alt="Custom Research e Insights"
                                    width={isResponsive ? 12 : 44}
                                    height={isResponsive ? 12 : 44}
                                    priority
                                />
                            </Link>
                        </div>
                        <div className={styles.textContent}>
                            <Link href={ROUTE_SERVICES_INVENTIAEXPERIENCE_PRODUCTDESIGN}>
                                <div className={styles.text}><Text text={option2Text} className={styles.item} /></div>
                                <Image
                                    src="/images/services/primary/experience/arrow.svg"
                                    alt="Product Design and Build"
                                    width={isResponsive ? 12 : 44}
                                    height={isResponsive ? 12 : 44}
                                    priority
                                />
                            </Link>
                        </div>
                        <div>
                            <Link href={ROUTE_SERVICES_INVENTIAEXPERIENCE_SERVICEDESIGN}>
                                <div className={styles.text}><Text text={option3Text} className={styles.item} /></div>
                                <Image
                                    src="/images/services/primary/experience/arrow.svg"
                                    alt="Service Design"
                                    width={isResponsive ? 12 : 44}
                                    height={isResponsive ? 12 : 44}
                                    priority
                                />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/images/services/primary/experience/people1.png"
                            alt="Inventia Experience"
                            width={isResponsive ? 180 : 534}
                            height={isResponsive ? 180 : 534}
                            priority
                        />
                    </div>
                </div>
                {isResponsive ? <div className={styles.button}>
                        <AnchorButton
                            responsiveBreakpoint={768}
                            theme="tertiary"
                        >
                            <Text text={buttonText} />
                        </AnchorButton>
                    </div> : null
                }
            </div>
        </section>
    )
}

export default Experience