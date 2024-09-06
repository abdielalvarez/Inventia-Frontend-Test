import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../../styles/block-pages/services/inventiaexperience-productdesign/main.module.css"
import useResponsive from "@/hooks/useResponsive";
import {
    TAG_INVENTIASOFTWARE
} from "@/utils/routes";
import Image from "next/image";

const Main = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(768)

    const titleText = {
        text: t('services.inventiaexperience-productdesign.block1.title'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 16 : 36,
        color: 'blackBase',
    }

    const subtitleText = {
        text: t('services.inventiaexperience-productdesign.block1.subtitle'),
        tag: "p",
        font: "poppinsBold",
        size: isResponsive ? 20 : 48,
        color: 'orangeBase',
    }

    const descriptionText = [
        {
            text: t('services.inventiaexperience-productdesign.block1.text1'),
            tag: "p",
            font: "poppinsLight",
            size: isResponsive ? 11 : 20,
            color: 'blackBase',
        },
        {
            text: t('services.inventiaexperience-productdesign.block1.text2'),
            tag: "p",
            font: "poppinsMedium",
            size: isResponsive ? 11 : 20,
            color: 'orangeBase',
        }
    ]

    const explanation1Text = [
        {
            text: t('services.inventiaexperience-productdesign.block2.text1'),
            tag: "p",
            font: "poppinsMedium",
            size: isResponsive ? 12 : 20,
            color: 'blackBase',
        },
        {
            text: t('services.inventiaexperience-productdesign.block2.text2'),
            tag: "p",
            font: "poppinsMedium",
            size: isResponsive ? 12 : 20,
            color: 'orangeBase',
        },
    ]

    const explanation2Text = [
        {
            text: t('services.inventiaexperience-productdesign.block2.text3'),
            tag: "p",
            font: "poppinsMedium",
            size: isResponsive ? 12 : 20,
            color: 'blackBase',
        },
        {
            text: t('services.inventiaexperience-productdesign.block2.text4'),
            tag: "p",
            font: "poppinsMedium",
            size: isResponsive ? 12 : 20,
            color: 'orangeBase',
        },
        {
            text: t('services.inventiaexperience-productdesign.block2.text5'),
            tag: "p",
            font: "poppinsMedium",
            size: isResponsive ? 12 : 20,
            color: 'blackBase',
        },
    ]

    const explanation3Text = [
        {
            text: t('services.inventiaexperience-productdesign.block2.text6'),
            tag: "p",
            font: "poppinsMedium",
            size: isResponsive ? 12 : 20,
            color: 'blackBase',
        },
        {
            text: t('services.inventiaexperience-productdesign.block2.text7'),
            tag: "p",
            font: "poppinsMedium",
            size: isResponsive ? 12 : 20,
            color: 'orangeBase',
        },
        {
            text: t('services.inventiaexperience-productdesign.block2.text8'),
            tag: "p",
            font: "poppinsMedium",
            size: isResponsive ? 12 : 20,
            color: 'blackBase',
        },
    ]

    return (
        <div>
            <section id={TAG_INVENTIASOFTWARE} className={styles.background}>
                <div className={styles.wrapper}>
                    <div className={styles.titleContainer}>
                        <Text text={titleText} className={styles.title} />
                    </div>
                    <div className={styles.container}>
                        <div className={styles.titleContainer}>
                            <div>
                                <Text text={subtitleText} className={styles.title} />
                            </div>
                        </div>
                        <div className={styles.descriptionContainer}>
                            <Text texts={descriptionText} className={styles.description} />
                        </div>
                    </div>
                </div>
            </section>
            <div className={styles.background2}>
                <Image
                    src="/images/services/inventiaexperience-productdesign/main/background.jpg"
                    alt="Product Design"
                    width={1920}
                    height={1080}
                    priority
                    layout="responsive"
                />
            </div>
            <section id={TAG_INVENTIASOFTWARE} className={styles.background}>
                <div className={styles.wrapper}>
                    <div className={styles.texts}>
                        <div className={styles.textContent}>
                            <Image
                                src="/images/services/inventiaexperience-productdesign/explanation/vision.svg"
                                alt="Better client understanding"
                                width={isResponsive ? 107 : 270}
                                height={isResponsive ? 47 : 118}
                                priority
                            />
                            <div className={styles.text}><Text texts={explanation1Text} /></div>
                        </div>
                        <div className={styles.textContent}>
                            <Image
                                src="/images/services/inventiaexperience-productdesign/explanation/person.svg"
                                alt="Better client understanding"
                                width={isResponsive ? 104 : 214}
                                height={isResponsive ? 104 : 214}
                                priority
                            />
                            <div className={styles.text}><Text texts={explanation2Text} /></div>
                        </div>
                        <div className={styles.textContent}>
                            <Image
                                src="/images/services/inventiaexperience-productdesign/explanation/prototype.svg"
                                alt="Better client understanding"
                                width={isResponsive ? 104 : 214}
                                height={isResponsive ? 104 : 214}
                                priority
                            />
                            <div className={styles.text}><Text texts={explanation3Text} /></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main