import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../styles/block-pages/home/trust.module.css"
import useResponsive from "@/hooks/useResponsive";
import AnchorButton from "@/components/AnchorButton";
import { ROUTE_CONTACTUS } from "@/utils/routes";
import Image from "next/image";

const Trust = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(768)

    const contactText = [
        {
            text: t('home.block7.title'),
            tag: "p",
            font: "poppinsBold",
            size: isResponsive ? 22 : 48,
            color: 'blackBase',
        }
    ];

    const buttonText = [
        {
            text: t('home.block7.button'),
            tag: "p",
            font: "poppinsRegular",
            size: isResponsive ? 10 : 20,
            color: 'whiteBase',
        }
    ];

    return (
        <section className={styles.background}>
            <div className={styles.wrapper}>
                <div className={styles.infoContainer}>
                    <Text texts={contactText} className={styles.title} />
                    <div className={styles.buttonContainer}>
                        <AnchorButton href={ROUTE_CONTACTUS}>
                            <Text texts={buttonText} />
                        </AnchorButton>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src="/images/home/trust/bbva.svg"
                        alt="BBVA"
                        width={isResponsive ? 63 : 207}
                        height={isResponsive ? 33 : 112}
                        priority
                    />
                    <Image
                        src="/images/home/trust/gentera.svg"
                        alt="Gentera"
                        width={isResponsive ? 81 : 269}
                        height={isResponsive ? 19 : 42}
                        priority
                    />
                    <Image
                        src="/images/home/trust/ion.svg"
                        alt="ION"
                        width={isResponsive ? 74 : 189}
                        height={isResponsive ? 53 : 134}
                        priority
                    />
                    <Image
                        src="/images/home/trust/podemos-progresar.svg"
                        alt="ION"
                        width={isResponsive ? 68 : 191}
                        height={isResponsive ? 30 : 87}
                        priority
                    />
                </div>
            </div>
        </section>
    )
}

export default Trust