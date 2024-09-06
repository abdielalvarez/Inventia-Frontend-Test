import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../../styles/block-pages/services/inventiaexperience-productdesign/explanation.module.css"
import useResponsive from "@/hooks/useResponsive";
import { ROUTE_CONTACTUS } from "@/utils/routes";
import AnchorButton from "@/components/AnchorButton";

const Explanation = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(768)

    const descriptionText = {
        text: t('services.inventiaexperience-productdesign.block3.text1'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 11 : 24,
        color: 'whiteBase',
    }

    const buttonText = {
        text: t('services.inventiaexperience-productdesign.block3.button'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 10 : 20,
        color: 'blackBase',
    }

    return (
        <section className={styles.background}>
            <div className={styles.wrapper}>
                <div className={styles.titleContainer}>
                    <Text text={descriptionText} className={styles.title} />
                </div>
                <div>
                    <AnchorButton
                        href={ROUTE_CONTACTUS}
                        responsiveBreakpoint={768}
                        theme="tertiary"
                    >
                        <Text text={buttonText} />
                    </AnchorButton>
                </div>
            </div>
        </section>
    )
}

export default Explanation