import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../styles/block-pages/home/specialize.module.css"
import useResponsive from "@/hooks/useResponsive";

const Specialize = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(920)

    const text = {
        text: t('home.block6.title'),
        tag: "p",
        font: !isResponsive ? "poppinsMedium" : "poppinsExtrabold",
        size: !isResponsive ? 96 : 32,
        color: 'whiteBase',
    }

    return (
        <section className={styles.background}>
            <div className={styles.wrapper}>
                <Text text={text} />
            </div>
        </section>
    )
}

export default Specialize