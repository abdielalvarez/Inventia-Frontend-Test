import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../../styles/block-pages/success-stories/financierapodemosprogresar/brief.module.css"
import useResponsive from "@/hooks/useResponsive";
import Text from "@/components/Text";
import Image from "next/image";
import FadeInWrapper from "@/context/wrappers/FadeInWrapper";

const Brief = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(768)

    const titleText = {
        text: t('success-stories.banking-financierapodemosprogresar.block2.title'),
        tag: "p",
        font: "poppinsBold",
        size: isResponsive ? 15 : 40,
        color: 'orangeBase',
    }

    const subtitleText = {
        text: t('success-stories.banking-financierapodemosprogresar.block2.subtitle'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 11 : 20,
        color: 'blackBase',
    }

    const description1Text = {
        text: t('success-stories.banking-financierapodemosprogresar.block2.text'),
        tag: "p",
        font: "poppinsMedium",
        size: isResponsive ? 11 : 23,
        color: 'blackCaption',
    }

    return (
        <div className={styles.background}>
            <Image
                src="/images/success-stories/banking-financierapodemosprogresar/brief/circle.svg"
                alt="Financiera Podemos Progresar"
                width={isResponsive ? 51 : 156}
                height={isResponsive ? 51 : 156}
                priority
                className={styles.img}
            />
            <div className={styles.wrapper1}>
                <div className={styles.container1}>
                    <div className={styles.titleContainer}>
                        <Text text={titleText} />
                    </div>
                    <FadeInWrapper type='fadeinright' replay={true}>
                        <div className={styles.subtitleContainer}>
                            <Text text={subtitleText} />
                        </div>
                    </FadeInWrapper>
                </div>
            </div>
            <div className={styles.wrapper2}>
                <div className={styles.container2}>
                    <FadeInWrapper type='fadeindown' replay={true}>
                        <div className={styles.description1Container}>
                            <Text text={description1Text} />
                        </div>
                    </FadeInWrapper>
                </div>
            </div>
        </div>
    )
}

export default Brief