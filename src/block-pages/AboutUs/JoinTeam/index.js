import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import useResponsive from "@/hooks/useResponsive";
import AnchorButton from "@/components/AnchorButton";
import useJoinTeamForm from "@/hooks/useJoinTeamForm";
import Input from "@/components/Input";
import styles from "../../../styles/block-pages/about-us/jointeamform.module.css"
import inputStyles from "../../../styles/components/input.module.css"
import Image from "next/image";

const JoinTeamForm = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(768)
    const { formData, handleChange, handleSubmit } = useJoinTeamForm()

    const titleText = {
        text: t('about-us.block4.title'),
        tag: "p",
        font: "poppinsBold",
        size: isResponsive ? 32 : 50,
        color: 'blackBase',
    }

    const descriptionText = {
        text: t('about-us.block4.subtitle'),
        tag: "p",
        font: isResponsive ? "poppinsLight" : "poppinsRegular",
        size: isResponsive ? 15 : 20,
        color: 'blackBase',
    }

    const buttonText = {
        text: t('about-us.block4.button'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 15 : 18,
        color: 'whiteBase',
    }

    return (
        <section className={styles.background}>
            <div className={styles.wrapper}>
                <div>
                    <div className={styles.infoContent}>
                        {isResponsive ?
                            <Image
                                src="/images/home/lets-talk/logo.svg"
                                alt="Inventia"
                                width={46}
                                height={56}
                                priority
                                className={styles.logoImg}
                            /> : null
                        }
                        <div className={styles.titleContainer}>
                            <Text text={titleText} className={styles.title} />
                        </div>
                        <div className={styles.subtitleContainer}>
                            <Text text={descriptionText} className={styles.subtitle} />
                        </div>
                    </div>
                </div>
                <div className={styles.formContainer}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.inputContainer}>
                            <Input
                                type="tel"
                                placeholder={t('about-us.block4.input1')}
                                value={formData.phone}
                                onChange={handleChange}
                                name="jointeam-phone"
                                id="jointeam-phone"
                                className={inputStyles.inputJoinTeam}
                            />
                            <Input
                                type="email"
                                placeholder={t('about-us.block4.input2')}
                                value={formData.email}
                                onChange={handleChange}
                                name="jointeam-email"
                                id="jointeam-email"
                                className={inputStyles.inputJoinTeam}
                            />
                            <Input
                                type="text"
                                placeholder={t('about-us.block4.input3')}
                                value={formData.name}
                                onChange={handleChange}
                                name="jointeam-name"
                                id="jointeam-name"
                                className={inputStyles.inputJoinTeam}
                            />
                            <Input
                                type="text"
                                placeholder={t('about-us.block4.input4')}
                                value={formData.role}
                                onChange={handleChange}
                                name="jointeam-role"
                                id="jointeam-role"
                                className={inputStyles.inputJoinTeam}
                            />
                        </div>
                        <AnchorButton
                            expandWidth={true}
                            responsiveBreakpoint={768}
                            theme="primary"
                            type="submit"
                        >
                            <Text text={buttonText} />
                        </AnchorButton>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default JoinTeamForm