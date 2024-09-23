import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../styles/block-pages/home/welcome.module.css"
import useResponsive from "@/hooks/useResponsive";
import FadeInWrapper from "@/context/wrappers/FadeInWrapper";

const Welcome = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(768)

    const welcomeText = [
        {
            text: t('home.block1.welcome'),
            tag: "p",
            font: !isResponsive ? "poppinsSemiBold" : "poppinsBold",
            size: !isResponsive ? 32 : 20,
            color: 'whiteBase',
        },
        {
            text: t('home.block1.inventia'),
            tag: "span",
            font: !isResponsive ? "poppinsBold" : "poppinsExtrabold",
            size: !isResponsive ? 96 : 40,
            color: 'whiteBase',
        },
    ];

    return (
        <section className={styles.background}>
            <div className={styles.wrapper}>
                <FadeInWrapper type="fadein">
                    <Text texts={welcomeText} className={styles.title} />
                </FadeInWrapper>
            </div>
        </section>
    )
}

export default Welcome