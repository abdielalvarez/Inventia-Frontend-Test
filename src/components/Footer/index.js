'use client'
import useResponsive from "@/hooks/useResponsive";
import Image from "next/image"
import Text from "../Text";
import styles from "../../styles/components/footer.module.css"
import Link from "next/link";
import {
    ROUTE_FACEBOOK,
    ROUTE_HOME,
    ROUTE_INSTAGRAM,
    ROUTE_LINKEDIN,
} from "@/utils/routes";
import useText from "./useText";

const Footer = () => {

    const isSmallScreen = useResponsive(768);

    const {
        contactUsTitleText,
        cellphoneText,
        emailText,
        addressTitleText,
        addressText,
        homeTitleText,
        servicesText,
        successfulText,
        aboutUsText,
        contactUsText,
        companyTitleText,
        companyText
    } = useText()

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer1}>
                {!isSmallScreen ?
                    <div>
                        <Link href={ROUTE_HOME}>
                            <Image
                                src="/images/footer/logo.svg"
                                alt="Logo"
                                width={157}
                                height={184}
                                priority
                            />
                        </Link>
                    </div> : null
                }
                <div className={styles.footerInfo}>
                    <div className={styles.footerSubInfo}>
                        <Text texts={contactUsTitleText} className={styles.footerTitle} />
                        <Text texts={cellphoneText} className={styles.footerText1} />
                        <Text texts={emailText} className={styles.footerText} />
                        <Text texts={addressTitleText} className={styles.footerTitle} />
                        <Text texts={addressText} className={styles.footerAddress} />
                    </div>
                    {!isSmallScreen ?
                        <div className={styles.footerSubInfo}>
                            <Text texts={homeTitleText} className={styles.footerTitle} />
                            <Text texts={servicesText} className={styles.footerText1} />
                            <Text texts={successfulText} className={styles.footerText1} />
                            <Text texts={aboutUsText} className={styles.footerText1} />
                            <Text texts={contactUsText} className={styles.footerText1} />
                        </div> : null
                    }
                    <div className={styles.footerSubInfo}>
                        <Text texts={companyTitleText} className={styles.footerTitle} />
                        <Text texts={companyText} className={styles.footerText1} />
                    </div>
                </div>
            </div>
            {!isSmallScreen ? <hr className={styles.footerDivider} /> : null}
            <div className={styles.footerContainer2}>
                <div className={styles.footerIcons}>
                    <a
                        href={ROUTE_LINKEDIN}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our linkedin website"
                        className={styles.footerImg}
                    >
                        <Image
                            src="/images/footer/linkedin.svg"
                            alt="Linkedin"
                            width={42}
                            height={42}
                            priority
                        />
                    </a>
                    <a
                        href={ROUTE_INSTAGRAM}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our instagram website"
                        className={styles.footerImg}
                    >
                        <Image
                            src="/images/footer/instagram.svg"
                            alt="Instagram"
                            width={42}
                            height={42}
                            priority
                        />
                    </a>
                    <a
                        href={ROUTE_FACEBOOK}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our facebook website"
                        className={styles.footerImg}
                    >
                        <Image
                            src="/images/footer/facebook.svg"
                            alt="Facebook"
                            width={42}
                            height={42}
                            priority
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer