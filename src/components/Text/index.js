'use client'
import React, { Fragment } from "react";
import styles from "../../styles/components/text.module.css";
import Link from 'next/link';

const Text = ({ texts, text, ...rest }) => {
    const determineFont = (font) => {
        const fontMap = {
            poppinsBlack: styles.poppinsBlack,
            poppinsBlackitalic: styles.poppinsBlackitalic,
            poppinsBold: styles.poppinsBold,
            poppinsBolditalic: styles.poppinsBolditalic,
            poppinsExtrabold: styles.poppinsExtrabold,
            poppinsExtrabolditalic: styles.poppinsExtrabolditalic,
            poppinsExtralight: styles.poppinsExtralight,
            poppinsExtralightitalic: styles.poppinsExtralightitalic,
            poppinsItalic: styles.poppinsItalic,
            poppinsLight: styles.poppinsLight,
            poppinsLightitalic: styles.poppinsLightitalic,
            poppinsMedium: styles.poppinsMedium,
            poppinsMediumitalic: styles.poppinsMediumitalic,
            poppinsRegular: styles.poppinsRegular,
            poppinsSemibold: styles.poppinsSemibold,
            poppinsSemibolditalic: styles.poppinsSemibolditalic,
            poppinsThin: styles.poppinsThin,
            poppinsThinitalic: styles.poppinsThinitalic,
        };
        return fontMap[font] || '';
    };

    const getProps = (textObj) => {
        const font = determineFont(textObj.font);
        const size = styles?.[`fontSize${textObj.size}`];
        const color = styles?.[`color${textObj.color}`];

        const commonProps = {
            ...rest,
            className: `${styles.inline} ${font} ${size} ${color} ${rest.className || ''}`
        };

        if (textObj.href) {
            const isInternal = textObj.href.startsWith('/') || textObj.href.startsWith('#');
            return isInternal 
                ? { ...commonProps, href: textObj.href, as: Link } 
                : { ...commonProps, href: textObj.href, target: '_blank', rel: 'noopener noreferrer' };
        }

        return commonProps;
    };

    const renderText = (textObj, index) => {
        const Tag = textObj.tag || "p";
        const props = getProps(textObj);
        const textContent = textObj.text.split('\n').map((line, lineIndex) => (
            <Fragment key={lineIndex}>
                {line}
                {lineIndex < textObj.text.split('\n').length - 1 && <br />}
            </Fragment>
        ));

        return textObj.href && textObj.href.startsWith('/') ? (
            <Link {...props} key={index} href={textObj.href}>
                {textContent}
            </Link>
        ) : (
            <Tag {...props} key={index}>
                {textContent}
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