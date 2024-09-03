import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../../styles/block-pages/services/primary/help.module.css"
import useResponsive from "@/hooks/useResponsive";
import Image from "next/image";

const Help = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(920)

    const helpTitle = {
        text: t('services.primary.block1.title'),
        tag: "p",
        font: "poppinsBold",
        size: isResponsive ? 24 : 48,
        color: 'blackBase',
    }

    const helpSubtitle = {
        text: t('services.primary.block1.text1'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 11 : 20,
        color: 'blackBase',
    }

    const experienceText = [
        {
            text: t('services.primary.block1.text2'),
            tag: "p",
            font: "poppinsSemibold",
            size: isResponsive ? 24 : 64,
            color: 'blackBase',
        },
        {
            text: t('services.primary.block1.text3'),
            tag: "span",
            font: "poppinsSemibold",
            size: isResponsive ? 24 : 64,
            color: 'orangeBase',
        },
    ];

    const softwareText = [
        {
            text: t('services.primary.block1.text4'),
            tag: "p",
            font: "poppinsSemibold",
            size: isResponsive ? 24 : 64,
            color: 'blackBase',
        },
        {
            text: t('services.primary.block1.text5'),
            tag: "span",
            font: "poppinsSemibold",
            size: isResponsive ? 24 : 64,
            color: 'blueBase',
        },
    ];

    const methodologyText = [
        {
            text: t('services.primary.block1.text6'),
            tag: "p",
            font: "poppinsSemibold",
            size: isResponsive ? 24 : 64,
            color: 'blackBase',
        }
    ];

    return (
        <section className={styles.background}>
            <Image
                src="/images/services/primary/help/circle.svg"
                alt="Services"
                width={isResponsive ? 74 : 312}
                height={isResponsive ? 74 : 312}
                priority
                className={styles.imgLeft2}
            />
            <div className={styles.wrapper}>
                <div className={styles.textLeft1}>
                    <Text text={helpTitle} />
                </div>
                <div className={styles.textLeft2}>
                    <Text text={helpSubtitle} />
                </div>
            </div>
            <div className={styles.wrapper2}>
                <div>
                    <Text texts={experienceText} className={styles.text1} />
                </div>
                <div>
                    <Text texts={softwareText} className={styles.text2} />
                </div>
                <div>
                    <Text texts={methodologyText} className={styles.text3} />
                </div>
            </div>
        </section>
    )
}

export default Help