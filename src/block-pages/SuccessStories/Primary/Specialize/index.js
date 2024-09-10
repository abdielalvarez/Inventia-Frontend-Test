import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../../styles/block-pages/success-stories/primary/specialize.module.css"
import useResponsive from "@/hooks/useResponsive";
import Text from "@/components/Text";

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
                <div className={styles.titleContainer}>
                    <Text text={titleText} />
                </div>
            </div>
        </div>
    )
}

export default Specialize