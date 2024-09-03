'use client'
import React, { Fragment } from "react";
import styles from "../../styles/components/text.module.css";
import Link from 'next/link';

const Text = ({ texts, text, ...rest }) => {
    const determineFont = (font) => {
        let fontType;
        switch (font) {
            case 'poppinsBlack':
                fontType = styles.poppinsBlack;
                break;
            case 'poppinsBlackitalic':
                fontType = styles.poppinsBlackitalic;
                break;
            case 'poppinsBold':
                fontType = styles.poppinsBold;
                break;
            case 'poppinsBolditalic':
                fontType = styles.poppinsBolditalic;
                break;
            case 'poppinsExtrabold':
                fontType = styles.poppinsExtrabold;
                break;
            case 'poppinsExtrabolditalic':
                fontType = styles.poppinsExtrabolditalic;
                break;
            case 'poppinsExtralight':
                fontType = styles.poppinsExtralight;
                break;
            case 'poppinsExtralightitalic':
                fontType = styles.poppinsExtralightitalic;
                break;
            case 'poppinsItalic':
                fontType = styles.poppinsItalic;
                break;
            case 'poppinsLight':
                fontType = styles.poppinsLight;
                break;
            case 'poppinsLightitalic':
                fontType = styles.poppinsLightitalic;
                break;
            case 'poppinsMedium':
                fontType = styles.poppinsMedium;
                break;
            case 'poppinsMediumitalic':
                fontType = styles.poppinsMediumitalic;
                break;
            case 'poppinsRegular':
                fontType = styles.poppinsRegular;
                break;
            case 'poppinsSemibold':
                fontType = styles.poppinsSemibold;
                break;
            case 'poppinsSemibolditalic':
                fontType = styles.poppinsSemibolditalic;
                break;
            case 'poppinsThin':
                fontType = styles.poppinsThin;
                break;
            case 'poppinsThinitalic':
                fontType = styles.poppinsThinitalic;
                break;
            default:
                fontType = '';
                break;
        }
        return fontType;
    };

    const getProps = (textObj) => {
        const Tag = textObj.tag || "p";
        const font = determineFont(textObj.font);
        const size = styles?.[`fontSize${textObj.size}`];
        const color = styles?.[`color${textObj.color}`];

        const commonProps = {
            ...rest,
            className: `${styles.inline} ${font} ${size} ${color} ${rest?.className || ''}`
        };

        if (Tag === "a") {
            const isInternal = textObj?.href?.startsWith('/') || textObj?.href?.startsWith('#');
            if (isInternal) {
                return {
                    ...commonProps,
                    href: textObj.href,
                };
            } else {
                const props = {
                    ...commonProps,
                    href: textObj.href,
                    target: '_blank',
                    rel: 'noopener noreferrer'
                };
                if (textObj.ariaLabel) props['aria-label'] = textObj.ariaLabel;
                return props;
            }
        }

        return commonProps;
    };

    const renderText = (textObj, index) => {
        const Tag = textObj.tag || "p";
        const props = getProps(textObj);

        return textObj.href && textObj.href.startsWith('/') ? (
            <Link {...props} key={index} href={textObj.href}>
                {textObj.text}
            </Link>
        ) : (
            <Tag {...props} key={index}>
                {textObj.text}
            </Tag>
        );
    };

    if (Array.isArray(texts)) {
        return (
            <div {...rest}>
                {texts.map((textObj, index) => (
                    <Fragment key={index}>
                        {renderText(textObj, index)}
                        {index < texts.length - 1 && <span>&nbsp;</span>}
                    </Fragment>
                ))}
            </div>
        );
    }

    if (text) {
        return renderText(text);
    }

    return null;
};

export default Text;