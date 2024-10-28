import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import useResponsive from "@/hooks/useResponsive";
import {
    TAG_INVENTIASOFTWARE
} from "@/utils/routes";
import Image from "next/image";
import FadeInWrapper from "@/context/wrappers/FadeInWrapper";
import { useInView } from "react-intersection-observer";
import styles from "../../../../styles/block-pages/services/inventiaexperience-productdesign/main.module.css"
import throughStyles from "../../../../styles/components/animations/through.module.css"

const Main = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(768)

    const titleText = {
        text: t('services.inventiaexperience-productdesign.block1.title'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 16 : 36,
        color: 'blackCaption',
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
            font: "poppinsLight",
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
            font: "poppinsLight",
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
            font: "poppinsLight",
            size: isResponsive ? 12 : 20,
            color: 'blackBase',
        },
    ]

    const explanation3Text = [
        {
            text: t('services.inventiaexperience-productdesign.block2.text6'),
            tag: "p",
            font: "poppinsLight",
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
            font: "poppinsLight",
            size: isResponsive ? 12 : 20,
            color: 'blackBase',
        },
    ]

    const { ref: text1, inView: isText1 } = useInView();
    const { ref: text2, inView: isText2 } = useInView();
    const { ref: text3, inView: isText3 } = useInView();

    return (
        <div>
            <section id={TAG_INVENTIASOFTWARE} className={styles.background}>
                <div className={styles.wrapper}>
                    <div className={styles.titleContainer}>
                        <Text text={titleText} className={styles.title} />
                    </div>
                    <FadeInWrapper type='fadeinright' replay={true}>
                        <div className={styles.container}>
                            <div className={styles.titleContainer}>
                                <div>
                                    <Text text={subtitleText} className={styles.title2} />
                                </div>
                            </div>
                            <div className={styles.descriptionContainer}>
                                <Text texts={descriptionText} className={styles.description} />
                            </div>
                        </div>
                    </FadeInWrapper>
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
                <div className={throughStyles.through2DownSecCont}>
                    <div className={throughStyles.through2FixedDiv}>
                        <Image
                            src="/images/services/inventiaexperience-productdesign/explanation/vision.svg"
                            alt="Better client understanding"
                            width={isResponsive ? 107 : 270}
                            height={isResponsive ? 47 : 118}
                            priority
                            className={isText1 ? throughStyles.through2StickyIcon : throughStyles.through2hidden}
                        />
                        <Image
                            src="/images/services/inventiaexperience-productdesign/explanation/person.svg"
                            alt="Better client understanding"
                            width={isResponsive ? 104 : 214}
                            height={isResponsive ? 104 : 214}
                            priority
                            className={isText2 ? throughStyles.through2StickyIcon : throughStyles.through2hidden}
                        />
                        <Image
                            src="/images/services/inventiaexperience-productdesign/explanation/prototype.svg"
                            alt="Better client understanding"
                            width={isResponsive ? 104 : 214}
                            height={isResponsive ? 104 : 214}
                            priority
                            className={isText3 ? throughStyles.through2StickyIcon : throughStyles.through2hidden}
                        />
                    </div>
                    <div className={throughStyles.through2DinamicDiv}>
                        <div ref={text1} className={styles.text}><Text texts={explanation1Text} /></div>
                        <div ref={text2} className={styles.text}><Text texts={explanation2Text} /></div>
                        <div ref={text3} className={styles.text}><Text texts={explanation3Text} /></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main