import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../styles/block-pages/contact-us/main.module.css"
import useResponsive from "@/hooks/useResponsive";
import AnchorButton from "@/components/AnchorButton";
import useContactUsForm from "@/hooks/useContactUsForm";
import Input from "@/components/Input";
import inputStyles from "../../../styles/components/input.module.css"

const Main = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(768)
    const { formData, handleChange, handleSubmit } = useContactUsForm()

    const explanationText = {
        text: t('contact-us.block1.title'),
        tag: "p",
        font: "poppinsBold",
        size: isResponsive ? 32 : 64,
        color: 'whiteBase',
    }

    const titleText = {
        text: t('home.block9.title'),
        tag: "p",
        font: "poppinsBold",
        size: isResponsive ? 32 : 50,
        color: 'whiteBase',
    }

    const descriptionText = {
        text: t('home.block9.text1'),
        tag: "p",
        font: isResponsive ? "poppinsLight" : "poppinsRegular",
        size: isResponsive ? 15 : 20,
        color: 'whiteBase',
    }

    const buttonText = {
        text: t('home.block9.button'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 15 : 18,
        color: 'blueBase',
    }

    return (
        <section className={styles.background}>
            <div className={styles.wrapper}>
                <div><Text text={explanationText} className={styles.title} /></div>
                <div className={styles.container}>
                    <div className={styles.formContainer}>
                        <div className={styles.infoContent}>
                            <div className={styles.titleContainer}>
                                <Text text={titleText} className={styles.title2} />
                            </div>
                            <div className={styles.subtitleContainer}>
                                <Text text={descriptionText} className={styles.subtitle} />
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.inputContainer}>
                                <Input
                                    type="tel"
                                    placeholder={t('home.block9.input1')}
                                    value={formData.phone}
                                    onChange={handleChange}
                                    name="home-phone"
                                    id="home-phone"
                                    className={inputStyles.inputContactUs}
                                />
                                <Input
                                    type="email"
                                    placeholder={t('home.block9.input2')}
                                    value={formData.email}
                                    onChange={handleChange}
                                    name="home-email"
                                    id="home-email"
                                    className={inputStyles.inputContactUs}
                                />
                                <Input
                                    type="text"
                                    placeholder={t('home.block9.input3')}
                                    value={formData.name}
                                    onChange={handleChange}
                                    name="home-name"
                                    id="home-name"
                                    className={inputStyles.inputContactUs}
                                />
                            </div>
                            <div className={styles.buttonContainer}>
                                <AnchorButton
                                    expandWidth={true}
                                    responsiveBreakpoint={768}
                                    theme="tertiary"
                                    type="submit"
                                >
                                    <Text text={buttonText} />
                                </AnchorButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main