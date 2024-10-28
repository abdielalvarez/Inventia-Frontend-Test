import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../styles/block-pages/home/help.module.css"
import useResponsive from "@/hooks/useResponsive";
import {
    ROUTE_HOME,
    TAG_INVENTIAEXPERIENCE,
    TAG_INVENTIASOFTWARE
} from "@/utils/routes";
import FadeInWrapper from "@/context/wrappers/FadeInWrapper";

const Help = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(768)

    const helpText1 = [
        {
            text: t('home.block4.text1'),
            tag: "a",
            href: `${ROUTE_HOME}/#${TAG_INVENTIAEXPERIENCE}`,
            font: "poppinsSemibold",
            size: isResponsive ? 15 : 40,
            color: 'whiteBase',
        },
    ];

    const helpText2 = [
        {
            text: t('home.block4.text2'),
            tag: "a",
            href: `${ROUTE_HOME}/#${TAG_INVENTIASOFTWARE}`,
            font: "poppinsSemibold",
            size: isResponsive ? 15 : 40,
            color: 'whiteBase',
        }
    ];

    const helpText3 = [
        {
            text: t('home.block4.text3'),
            tag: "p",
            font: "poppinsBold",
            size: isResponsive ? 24 : 48,
            color: 'whiteBase',
        }
    ];

    const helpText4 = [
        {
            text: t('home.block4.text4'),
            tag: "p",
            font: "poppinsLight",
            size: isResponsive ? 12 : 23,
            color: 'whiteBase',
        }
    ];

    return (
        <section className={styles.background}>
            <div className={styles.wrapper}>
                <div className={styles.column1}>
                    <FadeInWrapper type='fadeinright' replay={true}>
                        <Text texts={helpText1} className={styles.text1} />
                        <Text texts={helpText2} className={styles.text2} />
                    </FadeInWrapper>
                </div>
                <div className={styles.column2}>
                    <Text texts={helpText3} className={styles.text3} />
                    <Text texts={helpText4} className={styles.text4} />
                </div>
            </div>
        </section>
    )
}

export default Help