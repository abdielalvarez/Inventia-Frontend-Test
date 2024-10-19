'use client'
import { useApiContext } from "@/context/wrappers/ContextProvider";
import useLocation from "@/hooks/useLocation";
import useResponsive from "@/hooks/useResponsive";
import {
    ROUTE_ABOUTUS,
    ROUTE_CONTACTUS,
    ROUTE_SERVICES,
    ROUTE_SERVICES_INVENTIAEXPERIENCE_PRODUCTDESIGN,
    ROUTE_SERVICES_INVENTIAEXPERIENCE_RESEARCH,
    ROUTE_SERVICES_INVENTIAEXPERIENCE_SERVICEDESIGN,
    ROUTE_SERVICES_INVENTIASOFTWARE_CLOUDENGINEERING,
    ROUTE_SERVICES_INVENTIASOFTWARE_DEVOPSIMPLEMENTATION,
    ROUTE_SERVICES_INVENTIASOFTWARE_FULLSTACKDEVELOPMENT,
    ROUTE_SUCCESSSTORIES,
    ROUTE_SUCCESSSTORIES_BANKINGBBVA,
    ROUTE_SUCCESSSTORIES_BANKINGFINANCIERAPODEMOSPROGRESAR,
    ROUTE_SUCCESSSTORIES_BANKINGGRUPOGENTERA,
    ROUTE_SUCCESSSTORIES_BANKINGION,
    TAG_INVENTIAEXPERIENCE,
    TAG_INVENTIASOFTWARE
} from "@/utils/routes";

const useText = (isMenuOpen) => {

    const { t } = useApiContext()
    const isSmallScreen = useResponsive(768);
    const location = useLocation()

    const isServices = location?.pathname?.includes(ROUTE_SERVICES)
    const isSuccessStories = location?.pathname?.includes(ROUTE_SUCCESSSTORIES)
    const isAboutUs = location?.pathname?.includes(ROUTE_ABOUTUS)
    const isContactUs = location?.pathname?.includes(ROUTE_CONTACTUS)

    const servicesText = [
        {
            text: t('header.services.title'),
            href: null,
            tag: "p",
            font: isServices && !isSmallScreen ? "poppinsExtrabold" : "poppinsMedium",
            size: !isSmallScreen ? 20 : 22,
            color: 'blackBase',
        }
    ];

    const servicesInventiaExperienceText = [
        {
            text: t('header.services.section1.subtitle1'),
            tag: "a",
            href: `${ROUTE_SERVICES}`,
            font: "poppinsMedium",
            size: 13,
            color: 'blackBase',
        }
    ];

    const servicesInventiaExperienceOption1Text = [
        {
            text: t('header.services.section1.text1'),
            tag: "a",
            href: ROUTE_SERVICES_INVENTIAEXPERIENCE_RESEARCH,
            font: "poppinsLight",
            size: 13,
            color: 'blackBase',
        }
    ];

    const servicesInventiaExperienceOption2Text = [
        {
            text: t('header.services.section1.text2'),
            tag: "a",
            href: ROUTE_SERVICES_INVENTIAEXPERIENCE_PRODUCTDESIGN,
            font: "poppinsLight",
            size: 13,
            color: 'blackBase',
        }
    ];

    const servicesInventiaExperienceOption3Text = [
        {
            text: t('header.services.section1.text3'),
            tag: "a",
            href: ROUTE_SERVICES_INVENTIAEXPERIENCE_SERVICEDESIGN,
            font: "poppinsLight",
            size: 13,
            color: 'blackBase',
        }
    ];

    const servicesInventiaSoftwareText = [
        {
            text: t('header.services.section2.subtitle1'),
            tag: "a",
            href: `${ROUTE_SERVICES}`,
            font: "poppinsMedium",
            size: 13,
            color: 'blackBase',
        }
    ];

    const servicesInventiaSoftwareOption1Text = [
        {
            text: t('header.services.section2.text1'),
            tag: "a",
            href: ROUTE_SERVICES_INVENTIASOFTWARE_FULLSTACKDEVELOPMENT,
            font: "poppinsLight",
            size: 13,
            color: 'blackBase',
        }
    ];

    const servicesInventiaSoftwareOption2Text = [
        {
            text: t('header.services.section2.text2'),
            tag: "a",
            href: ROUTE_SERVICES_INVENTIASOFTWARE_CLOUDENGINEERING,
            font: "poppinsLight",
            size: 13,
            color: 'blackBase',
        }
    ];

    const servicesInventiaSoftwareOption3Text = [
        {
            text: t('header.services.section2.text3'),
            tag: "a",
            href: ROUTE_SERVICES_INVENTIASOFTWARE_DEVOPSIMPLEMENTATION,
            font: "poppinsLight",
            size: 13,
            color: 'blackBase',
        }
    ];

    const successText = [
        {
            text: t('header.successful.title'),
            href: null,
            tag: "p",
            font: isSuccessStories && !isSmallScreen ? "poppinsExtrabold" : "poppinsMedium",
            size: !isSmallScreen ? 20 : 22,
            color: 'blackBase'
        }
    ];

    const successServiciosFinancierosText = [
        {
            text: t('header.successful.section1.subtitle1'),
            tag: "a",
            href: ROUTE_SUCCESSSTORIES,
            font: "poppinsMedium",
            size: 13,
            color: 'blackBase'
        }
    ];

    const successServiciosFinancierosOption1Text = [
        {
            text: t('header.successful.section1.text1'),
            tag: "a",
            href: ROUTE_SUCCESSSTORIES_BANKINGBBVA,
            font: "poppinsLight",
            size: 13,
            color: 'blackBase'
        }
    ];

    const successServiciosFinancierosOption2Text = [
        {
            text: t('header.successful.section1.text2'),
            tag: "a",
            href: ROUTE_SUCCESSSTORIES_BANKINGGRUPOGENTERA,
            font: "poppinsLight",
            size: 13,
            color: 'blackBase'
        }
    ];

    const successBankingText = [
        {
            text: t('header.successful.section2.subtitle1'),
            tag: "a",
            href: ROUTE_SUCCESSSTORIES,
            font: "poppinsMedium",
            size: 13,
            color: 'blackBase'
        }
    ];

    const successBankingOption1Text = [
        {
            text: t('header.successful.section2.text1'),
            tag: "a",
            href: ROUTE_SUCCESSSTORIES_BANKINGFINANCIERAPODEMOSPROGRESAR,
            font: "poppinsLight",
            size: 13,
            color: 'blackBase'
        }
    ];

    const successBankingOption2Text = [
        {
            text: t('header.successful.section2.text2'),
            tag: "a",
            href: ROUTE_SUCCESSSTORIES_BANKINGION,
            font: "poppinsLight",
            size: 13,
            color: 'blackBase'
        }
    ];

    const aboutUsText = [
        {
            text: t('header.about-us.title'),
            tag: !isMenuOpen ? "a" : "p",
            href: ROUTE_ABOUTUS,
            font: isAboutUs && !isSmallScreen ? "poppinsExtrabold" : "poppinsMedium",
            size: !isSmallScreen ? 20 : 22,
            color: 'blackBase'
        }
    ];

    const contactUsText = [
        {
            text: t('header.contact-us.title'),
            tag: !isMenuOpen ? "a" : "p",
            href: ROUTE_CONTACTUS,
            font: isContactUs && !isSmallScreen ? "poppinsExtrabold" : "poppinsMedium",
            size: !isSmallScreen ? 20 : 22,
            color: 'blackBase'
        }
    ];

    const langText = [
        {
            text: t('header.lang.title'),
            tag: "p",
            font: !isSmallScreen ? "poppinsExtrabold" : "poppinsMedium",
            size: !isSmallScreen ? 20 : 22,
            color: 'blackBase'
        }
    ];

    const dropdownDataServices = [
        {
            title: {
                text: t('header.services.section1.subtitle1'),
                href: `${ROUTE_SERVICES}`
            },
            content: [
                {
                    text: t('header.services.section1.text1'),
                    href: ROUTE_SERVICES_INVENTIAEXPERIENCE_RESEARCH
                },
                {
                    text: t('header.services.section1.text2'),
                    href: ROUTE_SERVICES_INVENTIAEXPERIENCE_PRODUCTDESIGN
                },
                {
                    text: t('header.services.section1.text3'),
                    href: ROUTE_SERVICES_INVENTIAEXPERIENCE_SERVICEDESIGN
                }
            ]
        },
        {
            title: {
                text: t('header.services.section2.subtitle1'),
                href: `${ROUTE_SERVICES}`
            },
            content: [
                {
                    text: t('header.services.section2.text1'),
                    href: ROUTE_SERVICES_INVENTIASOFTWARE_FULLSTACKDEVELOPMENT
                },
                {
                    text: t('header.services.section2.text2'),
                    href: ROUTE_SERVICES_INVENTIASOFTWARE_CLOUDENGINEERING
                },
                {
                    text: t('header.services.section2.text3'),
                    href: ROUTE_SERVICES_INVENTIASOFTWARE_DEVOPSIMPLEMENTATION
                }
            ]
        },
    ];

    const dropdownDataSuccessStories = [
        {
            title: {
                text: t('header.successful.section1.subtitle1'),
                href: ROUTE_SUCCESSSTORIES
            },
            content: [
                {
                    text: t('header.successful.section1.text1'),
                    href: ROUTE_SUCCESSSTORIES_BANKINGBBVA
                },
                {
                    text: t('header.successful.section1.text2'),
                    href: ROUTE_SUCCESSSTORIES_BANKINGGRUPOGENTERA
                }
            ]
        },
        {
            title: {
                text: t('header.successful.section2.subtitle1'),
                href: ROUTE_SUCCESSSTORIES
            },
            content: [
                {
                    text: t('header.successful.section2.text1'),
                    href: ROUTE_SUCCESSSTORIES_BANKINGFINANCIERAPODEMOSPROGRESAR
                },
                {
                    text: t('header.successful.section2.text2'),
                    href: ROUTE_SUCCESSSTORIES_BANKINGION
                }
            ]
        }
    ];

    return {
        servicesText,
        servicesInventiaExperienceText,
        servicesInventiaExperienceOption1Text,
        servicesInventiaExperienceOption2Text,
        servicesInventiaExperienceOption3Text,
        servicesInventiaSoftwareText,
        servicesInventiaSoftwareOption1Text,
        servicesInventiaSoftwareOption2Text,
        servicesInventiaSoftwareOption3Text,
        successServiciosFinancierosText,
        successServiciosFinancierosOption1Text,
        successServiciosFinancierosOption2Text,
        successBankingText,
        successBankingOption1Text,
        successBankingOption2Text,
        successText,
        aboutUsText,
        contactUsText,
        langText,
        dropdownDataServices,
        dropdownDataSuccessStories
    }
}

export default useText