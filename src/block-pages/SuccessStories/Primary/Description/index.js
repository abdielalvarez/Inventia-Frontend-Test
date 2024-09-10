import styles from "../../../../styles/block-pages/success-stories/primary/description.module.css"
import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import useResponsive from "@/hooks/useResponsive";

const Description = () => {

    const isResponsive = useResponsive(768);
    const { t } = useApiContext()

    const text = {
        text: t('success-stories.primary.block4.text1'),
        tag: "p",
        font: isResponsive ? "poppinsLight" : "poppinsRegular",
        size: isResponsive ? 11 : 20,
        color: 'whiteBase'
    }

    return (
        <div className={styles.background}>
            <div className={styles.wrapper}>
                <div className={styles.text}>
                    <Text text={text} />
                </div>
            </div>
        </div>
    )
}

export default Description