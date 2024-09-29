import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../../styles/block-pages/success-stories/primary/specialize.module.css"
import useResponsive from "@/hooks/useResponsive";
import Text from "@/components/Text";
import FadeInWrapper from "@/context/wrappers/FadeInWrapper";

const Specialize = () => {

    const { t } = useApiContext()
    const is920 = useResponsive(920)
    const is768 = useResponsive(768)

    const titleText = {
        text: t('success-stories.primary.block2.title'),
        tag: "p",
        font: "poppinsSemibold",
        size: is768 ? 36 : is920 ? 50 : 96,
        color: 'whiteBase',
    }

    return (
        <div className={styles.background}>
            <div className={styles.wrapper}>
                <FadeInWrapper type='fadeinright' replay={true}>
                    <div className={styles.titleContainer}>
                        <Text text={titleText} className={styles.title} />
                    </div>
                </FadeInWrapper>
            </div>
        </div>
    )
}

export default Specialize