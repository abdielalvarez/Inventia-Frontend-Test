import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../../styles/block-pages/services/inventiasoftware-fullstackdevelopment/success.module.css"
import useResponsive from "@/hooks/useResponsive";
import { ROUTE_SERVICES_INVENTIAEXPERIENCE_SERVICEDESIGN, ROUTE_SERVICES_INVENTIASOFTWARE_CLOUDENGINEERING } from "@/utils/routes";
import Link from "next/link";
import Image from "next/image";

const Success = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(768)

    const titleText = {
        text: t('services.inventiasoftware-fullstackdevelopment.block3.title'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 20 : 64,
        color: 'whiteBase',
    }

    const descriptionText = {
        text: t('services.inventiasoftware-fullstackdevelopment.block3.text1'),
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
                            src="/images/services/inventiasoftware-fullstackdevelopment/success/illustration.jpg"
                            alt="Success"
                            width={isResponsive ? 130 : 345}
                            height={isResponsive ? 164 : 435}
                            priority
                        />
                    </div>
                    <div>
                        <div className={styles.titleContainer}>
                            <Text text={titleText} className={styles.title} />
                        </div>
                        {!isResponsive ?
                            <div className={styles.descriptionContainer}>
                                <Text text={descriptionText} className={styles.description} />
                            </div> : null
                        }
                    </div>
                </div>
                <div className={styles.container2}>
                    {isResponsive ?
                        <div className={styles.descriptionContainer}>
                            <Text text={descriptionText} className={styles.description} />
                        </div> : null
                    }
                    <Link href={ROUTE_SERVICES_INVENTIASOFTWARE_CLOUDENGINEERING}>
                        <Image
                            src="/images/services/inventiasoftware-fullstackdevelopment/success/arrow.svg"
                            alt="Success"
                            width={isResponsive ? 50 : 99}
                            height={isResponsive ? 15 : 30}
                            priority
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Success