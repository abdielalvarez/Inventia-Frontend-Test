import { useApiContext } from "@/context/wrappers/ContextProvider"
import useResponsive from "@/hooks/useResponsive"

const useText = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(768)

    const titleExperienceText = {
        text: t('about-us.block2.title'),
        tag: "p",
        font: "poppinsBold",
        size: isResponsive ? 24 : 48,
        color: 'blackBase',
    }

    const subtitleExperienceText = {
        text: t('about-us.block2.subtitle'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 13 : 24,
        color: 'blackBase',
    }

    const itemExperience1Text = {
        text: t('about-us.block2.text1'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 13 : 24,
        color: 'blackBase',
    }

    const itemExperience2Text = {
        text: t('about-us.block2.text2'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 13 : 24,
        color: 'blackBase',
    }

    const itemExperience3Text = {
        text: t('about-us.block2.text3'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 13 : 24,
        color: 'blackBase',
    }

    const itemExperience4Text = {
        text: t('about-us.block2.text4'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 13 : 24,
        color: 'blackBase',
    }

    const itemExperience5Text = {
        text: t('about-us.block2.text5'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 13 : 24,
        color: 'blackBase',
    }
    
    const itemExperience6Text = {
        text: t('about-us.block2.text6'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 13 : 24,
        color: 'blackBase',
    }

    const buttonExperienceText = {
        text: t('about-us.block2.button'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 13 : 20,
        color: 'whiteBase',
    }

    const titleSoftwareText = {
        text: t('about-us.block3.title'),
        tag: "p",
        font: "poppinsBold",
        size: isResponsive ? 24 : 48,
        color: 'blackBase',
    }

    const subtitleSoftwareText = {
        text: t('about-us.block3.subtitle'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 13 : 24,
        color: 'blackBase',
    }

    const itemSoftware1Text = {
        text: t('about-us.block3.text1'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 13 : 24,
        color: 'blackBase',
    }

    const itemSoftware2Text = {
        text: t('about-us.block3.text2'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 13 : 24,
        color: 'blackBase',
    }

    const itemSoftware3Text = {
        text: t('about-us.block3.text3'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 13 : 24,
        color: 'blackBase',
    }

    const itemSoftware4Text = {
        text: t('about-us.block3.text4'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 13 : 24,
        color: 'blackBase',
    }

    const itemSoftware5Text = {
        text: t('about-us.block3.text5'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 13 : 24,
        color: 'blackBase',
    }
    
    const itemSoftware6Text = {
        text: t('about-us.block3.text6'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 13 : 24,
        color: 'blackBase',
    }

    const itemSoftware7Text = {
        text: t('about-us.block3.text7'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 13 : 24,
        color: 'blackBase',
    }

    const itemSoftware8Text = {
        text: t('about-us.block3.text8'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 13 : 24,
        color: 'blackBase',
    }

    const itemSoftware9Text = {
        text: t('about-us.block3.text9'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 13 : 24,
        color: 'blackBase',
    }

    const itemSoftware10Text = {
        text: t('about-us.block3.text10'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 13 : 24,
        color: 'blackBase',
    }

    const buttonSoftwareText = {
        text: t('about-us.block3.button'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 13 : 20,
        color: 'whiteBase',
    }

    return {
        titleExperienceText,
        subtitleExperienceText,
        itemExperience1Text,
        itemExperience2Text,
        itemExperience3Text,
        itemExperience4Text,
        itemExperience5Text,
        itemExperience6Text,
        buttonExperienceText,
        titleSoftwareText,
        subtitleSoftwareText,
        itemSoftware1Text,
        itemSoftware2Text,
        itemSoftware3Text,
        itemSoftware4Text,
        itemSoftware5Text,
        itemSoftware6Text,
        itemSoftware7Text,
        itemSoftware8Text,
        itemSoftware9Text,
        itemSoftware10Text,
        buttonSoftwareText,
    }
}

export default useText