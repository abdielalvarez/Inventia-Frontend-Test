import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../../styles/block-pages/services/inventiasoftware-fullstackdevelopment/main.module.css"
import useResponsive from "@/hooks/useResponsive";
import {
    TAG_INVENTIASOFTWARE
} from "@/utils/routes";
import Image from "next/image";

const Main = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(768)

    const titleText = {
        text: t('services.inventiasoftware-fullstackdevelopment.block1.title'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 16 : 36,
        color: 'blackBase',
    }

    const subtitleText = {
        text: t('services.inventiasoftware-fullstackdevelopment.block1.subtitle'),
        tag: "p",
        font: "poppinsBold",
        size: isResponsive ? 20 : 48,
        color: 'blueBase',
    }

    const list1Text = {
        text: t('services.inventiasoftware-fullstackdevelopment.block1.list1.title1'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 15 : 36,
        color: 'blackBase',
    }

    const list1Item1Text = {
        text: t('services.inventiasoftware-fullstackdevelopment.block1.list1.text1'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 11 : 20,
        color: 'blackBase',
    }

    const list1Item2Text = {
        text: t('services.inventiasoftware-fullstackdevelopment.block1.list1.text2'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 11 : 20,
        color: 'blackBase',
    }

    const list1Item3Text = {
        text: t('services.inventiasoftware-fullstackdevelopment.block1.list1.text3'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 11 : 20,
        color: 'blackBase',
    }

    const list1Item4Text = {
        text: t('services.inventiasoftware-fullstackdevelopment.block1.list1.text4'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 11 : 20,
        color: 'blackBase',
    }

    const list2Text = {
        text: t('services.inventiasoftware-fullstackdevelopment.block1.list2.title1'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 15 : 36,
        color: 'blackBase',
    }

    const list2Item1Text = {
        text: t('services.inventiasoftware-fullstackdevelopment.block1.list2.text1'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 11 : 20,
        color: 'blackBase',
    }

    const list2Item2Text = {
        text: t('services.inventiasoftware-fullstackdevelopment.block1.list2.text2'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 11 : 20,
        color: 'blackBase',
    }

    const list2Item3Text = {
        text: t('services.inventiasoftware-fullstackdevelopment.block1.list2.text3'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 11 : 20,
        color: 'blackBase',
    }

    const list3Text = {
        text: t('services.inventiasoftware-fullstackdevelopment.block1.list3.title1'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 15 : 36,
        color: 'blackBase',
    }

    const list3Item1Text = {
        text: t('services.inventiasoftware-fullstackdevelopment.block1.list3.text1'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 11 : 20,
        color: 'blackBase',
    }

    const list3Item2Text = {
        text: t('services.inventiasoftware-fullstackdevelopment.block1.list3.text2'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 11 : 20,
        color: 'blackBase',
    }

    const list3Item3Text = {
        text: t('services.inventiasoftware-fullstackdevelopment.block1.list3.text3'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 11 : 20,
        color: 'blackBase',
    }

    return (
        <div>
            <div id={TAG_INVENTIASOFTWARE} className={styles.background2}>
                <Image
                    src="/images/services/inventiasoftware-fullstackdevelopment/main/background.jpg"
                    alt="Fullstack Development"
                    width={1920}
                    height={1080}
                    priority
                    layout="responsive"
                />
            </div>
            <section className={styles.background}>
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
                    </div>
                </div>
            </section>
            <section className={styles.background}>
                <div className={styles.wrapper}>
                    <div className={styles.texts}>
                        <div className={styles.textContent}>
                            <Image
                                src="/images/services/inventiasoftware-fullstackdevelopment/explanation/frontend.svg"
                                alt="Frontend Development"
                                width={isResponsive ? 104 : 334}
                                height={isResponsive ? 104 : 334}
                                priority
                            />
                            <div className={styles.content}>
                                <div className={styles.title}><Text className={styles.text} text={list1Text} /></div>
                                <div className={styles.text}><Text text={list1Item1Text} /></div>
                                <div className={styles.text}><Text text={list1Item2Text} /></div>
                                <div className={styles.text}><Text text={list1Item3Text} /></div>
                                <div className={styles.text}><Text text={list1Item4Text} /></div>
                            </div>
                        </div>
                        <div className={styles.textContent}>
                            <Image
                                src="/images/services/inventiasoftware-fullstackdevelopment/explanation/backend.svg"
                                alt="Backend Development"
                                width={isResponsive ? 104 : 334}
                                height={isResponsive ? 104 : 334}
                                priority
                            />
                            <div className={styles.content}>
                                <div className={styles.title}><Text className={styles.text} text={list2Text} /></div>
                                <div className={styles.text}><Text text={list2Item1Text} /></div>
                                <div className={styles.text}><Text text={list2Item2Text} /></div>
                                <div className={styles.text}><Text text={list2Item3Text} /></div>
                            </div>
                        </div>
                        <div className={styles.textContent}>
                            <Image
                                src="/images/services/inventiasoftware-fullstackdevelopment/explanation/mobile.svg"
                                alt="Mobile Development"
                                width={isResponsive ? 104 : 334}
                                height={isResponsive ? 104 : 334}
                                priority
                            />
                            <div className={styles.content}>
                                <div className={styles.title}><Text className={styles.text} text={list3Text} /></div>
                                <div className={styles.text}><Text text={list3Item1Text} /></div>
                                <div className={styles.text}><Text text={list3Item2Text} /></div>
                                <div className={styles.text}><Text text={list3Item3Text} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main