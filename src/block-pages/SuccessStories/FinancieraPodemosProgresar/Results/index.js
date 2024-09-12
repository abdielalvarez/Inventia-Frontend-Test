import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../../styles/block-pages/success-stories/financierapodemosprogresar/results.module.css"
import useResponsive from "@/hooks/useResponsive";
import Text from "@/components/Text";
import Image from "next/image";

const Results = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(768)

    const titleText = {
        text: t('success-stories.banking-financierapodemosprogresar.block3.title'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 15 : 40,
        color: 'orangeBase',
    }

    const description1Text = {
        text: t('success-stories.banking-financierapodemosprogresar.block3.text1'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 11 : 23,
        color: 'blackBase',
    }

    const description2Text = {
        text: t('success-stories.banking-financierapodemosprogresar.block3.text2'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 11 : 23,
        color: 'blackBase',
    }

    const description3Text = {
        text: t('success-stories.banking-financierapodemosprogresar.block3.text3'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 11 : 23,
        color: 'blackBase',
    }

    return (
        <div className={styles.background}>
            <div className={styles.wrapper}>
                <Image
                    src="/images/success-stories/banking-financierapodemosprogresar/results/people.jpg"
                    alt="Financiera Podemos Progresar"
                    width={isResponsive ? 138 : 471}
                    height={isResponsive ? 181 : 618}
                    priority
                    className={styles.img}
                />
                <div>
                    <div className={styles.titleContainer}>
                        <Text text={titleText} />
                    </div>
                    <div className={styles.description1Container}>
                        <Text text={description1Text} />
                    </div>
                    <div className={styles.description2Container}>
                        <Text text={description2Text} />
                    </div>
                    <div className={styles.description3Container}>
                        <Text text={description3Text} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results