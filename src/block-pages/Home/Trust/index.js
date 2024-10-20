import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../styles/block-pages/home/trust.module.css";
import useResponsive from "@/hooks/useResponsive";
import AnchorButton from "@/components/AnchorButton";
import {
    EXTERNAL_ROUTE_BBVA,
    EXTERNAL_ROUTE_GENTERA,
    EXTERNAL_ROUTE_ION,
    EXTERNAL_ROUTE_PODEMOS_PROGRESAR,
    ROUTE_CONTACTUS
} from "@/utils/routes";
import Image from "next/image";
import FadeInWrapper from "@/context/wrappers/FadeInWrapper";

const Trust = () => {
    const { t } = useApiContext();
    const isResponsive = useResponsive(768);

    const contactText = [
        {
            text: t('home.block7.title'),
            tag: "p",
            font: "poppinsBold",
            size: isResponsive ? 22 : 48,
            color: 'blackLight',
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
                        <AnchorButton
                            href={ROUTE_CONTACTUS}
                            width110={true}
                        >
                            <Text className={styles.buttonText} texts={buttonText} />
                        </AnchorButton>
                    </div>
                </div>
                <FadeInWrapper type='fadeinup' replay={true}>
                    <div className={styles.imgContainer}>
                        <a
                            href={EXTERNAL_ROUTE_BBVA}
                            target='_blank'
                            rel='noopener noreferrer'
                            className={styles.anchor1}
                        >
                            <Image
                                src="/images/home/trust/bbva.svg"
                                alt="BBVA"
                                width={isResponsive ? 63 : 207}
                                height={isResponsive ? 33 : 112}
                                priority
                            />
                        </a>
                        <a
                            href={EXTERNAL_ROUTE_GENTERA}
                            target='_blank'
                            rel='noopener noreferrer'
                            className={styles.anchor2}
                        >
                            <Image
                                src="/images/home/trust/gentera.svg"
                                alt="Gentera"
                                width={isResponsive ? 81 : 269}
                                height={isResponsive ? 19 : 42}
                                priority
                            />
                        </a>
                        <a
                            href={EXTERNAL_ROUTE_ION}
                            target='_blank'
                            rel='noopener noreferrer'
                            className={styles.anchor3}
                        >
                            <Image
                                src="/images/home/trust/ion.svg"
                                alt="ION"
                                width={isResponsive ? 74 : 189}
                                height={isResponsive ? 53 : 134}
                                priority
                            />
                        </a>
                        <a
                            href={EXTERNAL_ROUTE_PODEMOS_PROGRESAR}
                            target='_blank'
                            rel='noopener noreferrer'
                            className={styles.anchor4}
                        >
                            <Image
                                src="/images/home/trust/podemos-progresar.svg"
                                alt="Podemos progresar"
                                width={isResponsive ? 68 : 191}
                                height={isResponsive ? 30 : 87}
                                priority
                            />
                        </a>
                    </div>
                </FadeInWrapper>
            </div>
        </section>
    );
}

export default Trust;
