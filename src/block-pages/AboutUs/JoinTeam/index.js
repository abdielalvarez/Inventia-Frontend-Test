import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import useResponsive from "@/hooks/useResponsive";
import AnchorButton from "@/components/AnchorButton";
import useJoinTeamForm from "@/hooks/useJoinTeamForm";
import Input from "@/components/Input";
import styles from "../../../styles/block-pages/about-us/jointeamform.module.css";
import inputStyles from "../../../styles/components/input.module.css";
import Image from "next/image";
import ApiService from "@/services";
import { joinTeamOptions } from "@/utils/constants";
import { useState } from "react";

const JoinTeamForm = () => {
    const { t } = useApiContext();
    const isResponsive = useResponsive(768);
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const onSubmit = async (formData) => {
        try {
            setLoading(true)
            const payload = {
                phoneNumber: formData?.['jointeam-phone'],
                email: formData?.['jointeam-email'],
                name: formData?.['jointeam-name'],
                position: formData?.['jointeam-position'],
                files: formData?.['jointeam-files'],
            };
            const apiService = new ApiService('http://localhost:8000');
            const result = await apiService.postFormData('inventia/contact/send/files', payload);
            console.log('result', result)
            setLoading(false)
            setSuccess(true)
        } catch (error) {
            console.error('Fetch error:', error);
            setLoading(false)
        }
    };

    const {
        formData,
        handleChange,
        handleFileChange,
        handleSubmit,
        handleDelete
    } = useJoinTeamForm(onSubmit);

    const titleText = {
        text: t('about-us.block4.title'),
        tag: "p",
        font: "poppinsBold",
        size: isResponsive ? 32 : 50,
        color: 'blackBase',
    };

    const descriptionText = {
        text: t('about-us.block4.subtitle'),
        tag: "p",
        font: isResponsive ? "poppinsLight" : "poppinsRegular",
        size: isResponsive ? 15 : 20,
        color: 'blackBase',
    };

    const buttonText = {
        text: success ? '¡Ya lo enviamos!' : t('about-us.block4.button'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 15 : 18,
        color: 'whiteBase',
    };

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
                                onChange={(e) => handleChange(e.target.value, 'jointeam-phone')}
                                name="jointeam-phone"
                                id="jointeam-phone"
                                className={inputStyles.inputJoinTeam}
                            />
                            <Input
                                type="email"
                                placeholder={t('about-us.block4.input2')}
                                value={formData.email}
                                onChange={(e) => handleChange(e.target.value, 'jointeam-email')}
                                name="jointeam-email"
                                id="jointeam-email"
                                className={inputStyles.inputJoinTeam}
                            />
                            <Input
                                type="text"
                                placeholder={t('about-us.block4.input3')}
                                value={formData.name}
                                onChange={(e) => handleChange(e.target.value, 'jointeam-name')}
                                name="jointeam-name"
                                id="jointeam-name"
                                className={inputStyles.inputJoinTeam}
                            />
                            <Input
                                type="select"
                                placeholder={t('about-us.block4.input4')}
                                value={formData.position}
                                onChange={(e) => handleChange(e.target.value, 'jointeam-position')}
                                name="jointeam-position"
                                id="jointeam-position"
                                className={inputStyles.inputJoinTeam}
                                options={joinTeamOptions}
                            />
                            <Input
                                type="file"
                                value={formData?.['jointeam-files']}
                                placeholder="CV y portafolio"
                                onChange={(e) => handleFileChange(e.target.files, 'jointeam-files')}
                                name="jointeam-files"
                                id="jointeam-files"
                                accept=".pdf,.png,.jpg,.jpeg"
                                multiple
                                handleDelete={handleDelete}
                            />
                        </div>
                        <AnchorButton
                            disabled={loading || success}
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
    );
};

export default JoinTeamForm;
