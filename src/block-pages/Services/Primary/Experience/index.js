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
import FadeInWrapper from "@/context/wrappers/FadeInWrapper";

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
                    <FadeInWrapper type='fadeinright' replay={true}>
                        <div className={styles.titleContainer}>
                            <Text text={titleText} className={styles.title} />
                        </div>
                    </FadeInWrapper>
                    <FadeInWrapper type='fadeinright' replay={true}>
                        <div className={styles.descriptionContainer}><Text text={descriptionText} /></div>
                    </FadeInWrapper>
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
                                <FadeInWrapper type='fadeindown' replay={true}>
                                    <div className={styles.text}><Text text={option1Text} className={styles.item} /></div>
                                </FadeInWrapper>
                                <FadeInWrapper type='fadeinright' replay={true}>
                                    <Image
                                        src="/images/services/primary/experience/arrow.svg"
                                        alt="Custom Research e Insights"
                                        width={isResponsive ? 12 : 44}
                                        height={isResponsive ? 12 : 44}
                                        priority
                                    />
                                </FadeInWrapper>
                            </Link>
                        </div>
                        <div className={styles.textContent}>
                            <Link href={ROUTE_SERVICES_INVENTIAEXPERIENCE_PRODUCTDESIGN}>
                                <FadeInWrapper type='fadeindown' replay={true}>
                                    <div className={styles.text}><Text text={option2Text} className={styles.item} /></div>
                                </FadeInWrapper>
                                <FadeInWrapper type='fadeinright' replay={true}>
                                    <Image
                                        src="/images/services/primary/experience/arrow.svg"
                                        alt="Product Design and Build"
                                        width={isResponsive ? 12 : 44}
                                        height={isResponsive ? 12 : 44}
                                        priority
                                    />
                                </FadeInWrapper>
                            </Link>
                        </div>
                        <div>
                            <Link href={ROUTE_SERVICES_INVENTIAEXPERIENCE_SERVICEDESIGN}>
                                <FadeInWrapper type='fadeindown' replay={true}>
                                    <div className={styles.text}><Text text={option3Text} className={styles.item} /></div>
                                </FadeInWrapper>
                                <FadeInWrapper type='fadeinright' replay={true}>
                                    <Image
                                        src="/images/services/primary/experience/arrow.svg"
                                        alt="Service Design"
                                        width={isResponsive ? 12 : 44}
                                        height={isResponsive ? 12 : 44}
                                        priority
                                    />
                                </FadeInWrapper>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/images/services/primary/experience/people1.png"
                            alt="Inventia Experience"
                            width={isResponsive ? 180 : 530}
                            height={isResponsive ? 180 : 530}
                            priority
                        />
                    </div>
                </div>
                {isResponsive ? <div className={styles.button}>
                    <AnchorButton
                        responsiveBreakpoint={768}
                        theme="tertiary"
                        width110={true}
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