import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../../styles/block-pages/success-stories/bbva/success.module.css"
import useResponsive from "@/hooks/useResponsive";
import { ROUTE_SERVICES_INVENTIAEXPERIENCE_SERVICEDESIGN } from "@/utils/routes";
import Link from "next/link";
import Image from "next/image";
import FadeInWrapper from "@/context/wrappers/FadeInWrapper";

const Success = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(768)

    const titleText = {
        text: t('success-stories.banking-bbva.block5.title'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 20 : 64,
        color: 'whiteBase',
    }

    return (
        <section className={styles.background}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <FadeInWrapper type='fadeindown' replay={true}>
                        {!isResponsive ?
                            <div className={styles.titleContainer}>
                                <Text text={titleText} className={styles.title} />
                            </div> : null
                        }
                    </FadeInWrapper>
                    <div className={styles.container2}>
                        <Image
                            src="/images/success-stories/banking-bbva/success/illustration.jpg"
                            alt="Success"
                            width={isResponsive ? 130 : 345}
                            height={isResponsive ? 164 : 435}
                            priority
                            className={styles.img}
                        />
                        <div>
                            {isResponsive ?
                                <div className={styles.titleContainer}>
                                    <Text text={titleText} className={styles.title} />
                                </div> : null
                            }
                            <Link href={ROUTE_SERVICES_INVENTIAEXPERIENCE_SERVICEDESIGN}>
                                <FadeInWrapper type='fadeinright' replay={true}>
                                    <Image
                                        src="/images/success-stories/banking-bbva/success/arrow.svg"
                                        alt="Success"
                                        width={isResponsive ? 50 : 99}
                                        height={isResponsive ? 15 : 30}
                                        priority
                                    />
                                </FadeInWrapper>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Success