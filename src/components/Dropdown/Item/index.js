import Text from "@/components/Text";

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
        <Text texts={titleText} />
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
        <Text texts={subtitleText} />
    );
};