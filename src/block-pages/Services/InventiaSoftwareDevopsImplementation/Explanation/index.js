import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../../styles/block-pages/services/inventiasoftware-devopsimplementation/explanation.module.css"
import useResponsive from "@/hooks/useResponsive";
import { ROUTE_CONTACTUS } from "@/utils/routes";
import AnchorButton from "@/components/AnchorButton";
import FadeInWrapper from "@/context/wrappers/FadeInWrapper";

const Explanation = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(768)

    const descriptionText = {
        text: t('services.inventiasoftware-devopsimplementation.block2.text1'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 11 : 24,
        color: 'whiteBase',
    }

    const buttonText = {
        text: t('services.inventiasoftware-devopsimplementation.block2.button'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 10 : 20,
        color: 'blackBase',
    }

    return (
        <section className={styles.background}>
            <div className={styles.wrapper}>
                <FadeInWrapper type='fadeinup' replay={true}>
                    <div className={styles.titleContainer}>
                        <Text text={descriptionText} className={styles.title} />
                    </div>
                </FadeInWrapper>
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