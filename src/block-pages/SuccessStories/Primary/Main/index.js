import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../../styles/block-pages/success-stories/primary/main.module.css"
import useResponsive from "@/hooks/useResponsive";
import Text from "@/components/Text";
import FadeInWrapper from "@/context/wrappers/FadeInWrapper";

const Main = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(768)

    const titleText = {
        text: t('success-stories.primary.block1.title'),
        tag: "p",
        font: "poppinsBold",
        size: isResponsive ? 24 : 48,
        color: 'blackBase',
    }

    const subtitleText = {
        text: t('success-stories.primary.block1.text1'),
        tag: "p",
        font: isResponsive ? "poppinsRegular" : "poppinsLight",
        size: isResponsive ? 11 : 20,
        color: 'blackBase',
    }

    return (
        <div className={styles.background}>
            <div className={styles.wrapper}>
            <FadeInWrapper type='fadeinright' replay={true}>
                <div className={styles.titleContainer}>
                    <Text text={titleText} />
                </div>
            </FadeInWrapper>
            <FadeInWrapper type='fadeinright' replay={true}>
                <div className={styles.subtitleContainer}>
                    <Text text={subtitleText} />
                </div>
            </FadeInWrapper>
            </div>
        </div>
    )
}

export default Main