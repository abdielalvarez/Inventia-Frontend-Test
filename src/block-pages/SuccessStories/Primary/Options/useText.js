'use client'
import { useApiContext } from "@/context/wrappers/ContextProvider";
import useResponsive from "@/hooks/useResponsive";
import {
    ROUTE_SUCCESSSTORIES_BANKINGBBVA,
    ROUTE_SUCCESSSTORIES_BANKINGFINANCIERAPODEMOSPROGRESAR,
    ROUTE_SUCCESSSTORIES_BANKINGGRUPOGENTERA,
    ROUTE_SUCCESSSTORIES_BANKINGION
} from "@/utils/routes";

const useText = (colliders) => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(768);

    const optionTitleText = {
        text: t('success-stories.primary.block3.title'),
        tag: "p",
        font: "poppinsMedium",
        size: isResponsive ? 16 : 40,
        color: 'blackUltra',
    }

    const financialServicesText = {
        text: t('success-stories.primary.block3.collider1.title'),
        tag: "p",
        font: "poppinsBold",
        size: isResponsive ? 20 : 48,
        color: 'orangeBase',
    }

    const financialServicesOption1Text = {
        text: t('success-stories.primary.block3.collider1.explanation1'),
        href: colliders.financialServices ? ROUTE_SUCCESSSTORIES_BANKINGFINANCIERAPODEMOSPROGRESAR : null,
        tag: colliders.financialServices ? "a" : "p",
        font: isResponsive ? "poppinsLight" : "poppinsRegular",
        size: isResponsive ? 16 : 27,
        color: 'blackBase',
    }

    const financialServicesOption2Text = {
        text: t('success-stories.primary.block3.collider1.explanation2'),
        href: colliders.financialServices ? ROUTE_SUCCESSSTORIES_BANKINGION : null,
        tag: colliders.financialServices ? "a" : "p",
        font: isResponsive ? "poppinsLight" : "poppinsRegular",
        size: isResponsive ? 16 : 27,
        color: 'blackBase',
    }

    const bankingText = {
        text: t('success-stories.primary.block3.collider2.title'),
        tag: "p",
        font: "poppinsBold",
        size: isResponsive ? 20 : 48,
        color: 'orangeBase',
    }

    const bankingOption1Text = {
        text: t('success-stories.primary.block3.collider2.explanation1'),
        href: colliders.banking ? ROUTE_SUCCESSSTORIES_BANKINGBBVA : null,
        tag: colliders.banking ? "a" : "p",
        font: isResponsive ? "poppinsLight" : "poppinsRegular",
        size: isResponsive ? 16 : 27,
        color: 'blackBase'
    }

    const bankingOption2Text = {
        text: t('success-stories.primary.block3.collider2.explanation2'),
        href: colliders.banking ? ROUTE_SUCCESSSTORIES_BANKINGGRUPOGENTERA : null,
        tag: colliders.banking ? "a" : "p",
        font: isResponsive ? "poppinsLight" : "poppinsRegular",
        size: isResponsive ? 16 : 27,
        color: 'blackBase'
    }

    return {
        optionTitleText,
        financialServicesText,
        financialServicesOption1Text,
        financialServicesOption2Text,
        bankingText,
        bankingOption1Text,
        bankingOption2Text
    }
}

export default useText