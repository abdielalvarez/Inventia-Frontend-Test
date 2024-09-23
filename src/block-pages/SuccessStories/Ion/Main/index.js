import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../../styles/block-pages/success-stories/ion/main.module.css"
import useResponsive from "@/hooks/useResponsive";
import Text from "@/components/Text";
import FadeInWrapper from "@/context/wrappers/FadeInWrapper";

const Main = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(768)

    const titleText = {
        text: t('success-stories.banking-ion.block1.title'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 20 : 36,
        color: 'blackBase',
    }

    const subtitleText = {
        text: t('success-stories.banking-ion.block1.subtitle'),
        tag: "p",
        font: "poppinsBold",
        size: isResponsive ? 20 : 48,
        color: 'blackBase',
    }

    const descriptionText = {
        text: t('success-stories.banking-ion.block1.description'),
        tag: "p",
        font: "poppinsMedium",
        size: isResponsive ? 11 : 20,
        color: 'blueBase',
    }

    const tags1Text = {
        text: t('success-stories.banking-ion.block1.tags1'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 11 : 20,
        color: 'blackBase',
    }

    const tags2Text = {
        text: t('success-stories.banking-ion.block1.tags2'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 11 : 20,
        color: 'blackBase',
    }

    return (
        <div className={styles.background}>
            <div className={styles.wrapper}>
                <div className={styles.titleContainer}>
                    <Text text={titleText} />
                </div>
                {!isResponsive ?
                    <div className={styles.tagsContainer}>
                        <Text text={tags1Text} /><br />
                        <Text text={tags2Text} />
                    </div> : null
                }
                <FadeInWrapper type='fadeinright' replay={true}>
                    <div className={styles.container}>
                        <div className={styles.subtitleContainer}>
                            <Text text={subtitleText} />
                        </div>
                        <div className={styles.descriptionContainer}>
                            <Text text={descriptionText} />
                        </div>
                    </div>
                </FadeInWrapper>
                {isResponsive ?
                    <div className={styles.tagsContainer}>
                        <Text text={tags1Text} /><br />
                        <Text text={tags2Text} />
                    </div> : null
                }
            </div>
        </div>
    )
}

export default Main