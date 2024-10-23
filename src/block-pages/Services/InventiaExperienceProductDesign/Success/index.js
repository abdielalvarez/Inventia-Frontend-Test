import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../../styles/block-pages/services/inventiaexperience-productdesign/success.module.css"
import useResponsive from "@/hooks/useResponsive";
import { ROUTE_SUCCESSSTORIES } from "@/utils/routes";
import Link from "next/link";
import Image from "next/image";
import FadeInWrapper from "@/context/wrappers/FadeInWrapper";

const Success = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(768)

    const titleText = {
        text: t('services.inventiaexperience-productdesign.block4.title'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 20 : 64,
        color: 'whiteBase',
    }

    const descriptionText = {
        text: t('services.inventiaexperience-productdesign.block4.text1'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 11 : 20,
        color: 'whiteBase',
    }

    return (
        <section className={styles.background}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div>
                        <Image
                            src="/images/services/inventiaexperience-productdesign/success/illustration.jpg"
                            alt="Success"
                            width={isResponsive ? 130 : 345}
                            height={isResponsive ? 164 : 435}
                            priority
                        />
                    </div>
                    <div>
                        <FadeInWrapper type='fadeinup' replay={true}>
                            <div className={styles.titleContainer}>
                                <Text text={titleText} className={styles.title} />
                            </div>
                            {!isResponsive ?
                                <div className={styles.descriptionContainer}>
                                    <Text text={descriptionText} className={styles.description} />
                                </div> : null
                            }
                        </FadeInWrapper>
                    </div>
                </div>
                <div className={styles.container2}>
                    {isResponsive ?
                        <div className={styles.descriptionContainer}>
                            <Text text={descriptionText} className={styles.description} />
                        </div> : null
                    }
                    <Link href={ROUTE_SUCCESSSTORIES}>
                        <FadeInWrapper type='fadeinright' replay={true}>
                            <Image
                                src="/images/services/inventiaexperience-productdesign/success/arrow.svg"
                                alt="Success"
                                width={isResponsive ? 50 : 99}
                                height={isResponsive ? 15 : 30}
                                priority
                            />
                        </FadeInWrapper>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Success