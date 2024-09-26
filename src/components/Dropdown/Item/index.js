import Text from "@/components/Text";
import styles from "../../../styles/components/dropdown.module.css"

export const Item = ({ text, href }) => {
    const titleText = [
        {
            text,
            href,
            tag: "a",
            font: "poppinsMedium",
            size: 16,
            color: 'blackBase',
        }
    ];

    return (
        <Text className={styles.textTitle} texts={titleText} />
    );
};

export const SubItem = ({ text, href }) => {
    const subtitleText = [
        {
            text,
            href,
            tag: "a",
            font: "poppinsLight",
            size: 16,
            color: 'blackBase',
        }
    ];

    return (
        <Text className={styles.textSubtitle} texts={subtitleText} />
    );
};