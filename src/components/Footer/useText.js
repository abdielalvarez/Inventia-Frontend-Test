'use client'
import { useApiContext } from "@/context/wrappers/ContextProvider";
import {
    ROUTE_ABOUTUS,
    ROUTE_CONTACTUS,
    ROUTE_HOME,
    ROUTE_SERVICES,
    ROUTE_SUCCESSSTORIES,
} from "@/utils/routes";

const useText = () => {

    const { t } = useApiContext()

    const contactUsTitleText = [{
        text: t('footer.contact-us.title'),
        tag: "p",
        font: "poppinsBold",
        size: 15,
        color: 'whiteBase',
    }];

    const cellphoneText = [{
        text: t('footer.contact-us.cellphone'),
        tag: "a",
        href: "tel:+525588511250",
        ariaLabel: "Call 55 88 51 12 50",
        font: "poppinsLight",
        size: 15,
        color: 'whiteBase',
    }];

    const emailText = [{
        text: t('footer.contact-us.email'),
        tag: "a",
        href: `mailto:${t('footer.contact-us.email')}`,
        ariaLabel: `Mail to ${t('footer.contact-us.email')}`,
        font: "poppinsLight",
        size: 15,
        color: 'whiteBase',
    }];

    const addressTitleText = [{
        text: t('footer.address.title'),
        tag: "p",
        font: "poppinsBold",
        size: 15,
        color: 'whiteBase',
    }];

    const addressText = [{
        text: t('footer.address.text1'),
        tag: "a",
        href: "https://www.google.com.mx/maps/place/Calle+Lisboa+47,+Ju%C3%A1rez,+Cuauht%C3%A9moc,+06600+Ciudad+de+M%C3%A9xico,+CDMX/@19.429377,-99.1587616,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1ff435db370bf:0xb67eb88678bebb84!8m2!3d19.429377!4d-99.1561867!16s%2Fg%2F11khhhjqbw?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D",
        ariaLabel: `See location in Maps ${t('footer.address.text1')}`,
        font: "poppinsLight",
        size: 15,
        color: 'whiteBase',
    }];

    const homeTitleText = [{
        text: t('footer.home.title'),
        tag: "a",
        href: ROUTE_HOME,
        font: "poppinsBold",
        size: 15,
        color: 'whiteBase',
    }];

    const servicesText = [{
        text: t('footer.home.services'),
        tag: "a",
        href: ROUTE_SERVICES,
        font: "poppinsLight",
        size: 15,
        color: 'whiteBase',
    }];

    const successfulText = [{
        text: t('footer.home.successful'),
        tag: "a",
        href: ROUTE_SUCCESSSTORIES,
        font: "poppinsLight",
        size: 15,
        color: 'whiteBase',
    }];

    const aboutUsText = [{
        text: t('footer.home.about-us'),
        tag: "a",
        href: ROUTE_ABOUTUS,
        font: "poppinsLight",
        size: 15,
        color: 'whiteBase',
    }];

    const contactUsText = [{
        text: t('footer.home.contact-us'),
        tag: "a",
        href: ROUTE_CONTACTUS,
        font: "poppinsLight",
        size: 15,
        color: 'whiteBase',
    }];

    const companyTitleText = [{
        text: t('footer.company.title'),
        tag: "p",
        font: "poppinsBold",
        size: 15,
        color: 'whiteBase',
    }];

    const companyText = [{
        text: t('footer.company.subtitle'),
        tag: "p",
        font: "poppinsLight",
        size: 15,
        color: 'whiteBase',
    }]

    return {
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
    }
}

export default useText