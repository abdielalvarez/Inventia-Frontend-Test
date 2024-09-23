import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../../styles/block-pages/success-stories/ion/contactus.module.css"
import useResponsive from "@/hooks/useResponsive";
import { ROUTE_CONTACTUS } from "@/utils/routes";
import AnchorButton from "@/components/AnchorButton";
import FadeInWrapper from "@/context/wrappers/FadeInWrapper";

const ContactUs = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(768)

    const descriptionText = {
        text: t('success-stories.banking-ion.block4.title'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 14 : 24,
        color: 'blackBase',
    }

    const buttonText = {
        text: t('success-stories.banking-ion.block4.text1'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 10 : 20,
        color: 'whiteBase',
    }

    return (
        <section className={styles.background}>
            <div className={styles.wrapper}>
            <FadeInWrapper type='fadeinup' replay={true}>
                <div className={styles.titleContainer}>
                    <Text text={descriptionText} className={styles.title} />
                </div>
            </FadeInWrapper>
                <div className={styles.buttonContainer}>
                    <AnchorButton
                        href={ROUTE_CONTACTUS}
                        responsiveBreakpoint={768}
                        theme="secondary"
                    >
                        <Text text={buttonText} />
                    </AnchorButton>
                </div>
            </div>
        </section>
    )
}

export default ContactUs