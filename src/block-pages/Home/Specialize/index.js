import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../styles/block-pages/home/specialize.module.css"
import useResponsive from "@/hooks/useResponsive";
import FadeInWrapper from "@/context/wrappers/FadeInWrapper";

const Specialize = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(920)

    const text = {
        text: t('home.block6.title'),
        tag: "p",
        font: "poppinsExtrabold",
        size: !isResponsive ? 96 : 32,
        color: 'whiteBase',
    }

    return (
        <section className={styles.background}>
            <div className={styles.wrapper}>
                <FadeInWrapper type='fadeinright' replay={true}>
                    <Text className={styles.title} text={text} />
                </FadeInWrapper>
            </div>
        </section>
    )
}

export default Specialize