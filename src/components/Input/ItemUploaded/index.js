import Text from "@/components/Text"
import Image from "next/image"
import styles from '../../../styles/components/input.module.css';
import useResponsive from "@/hooks/useResponsive";

const ItemUploaded = ({ text, handleDelete, index, name }) => {

    const isResponsive = useResponsive(768);

    const itemText = {
        text,
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 11 : 16,
        color: 'blackBase',
    };

    return (
        <li>
            <div className={styles.filePreview}>
                <div className={styles.fileContainer1}>
                    <Image
                        src="/images/components/input/file.svg"
                        alt="Upload File"
                        width={24}
                        height={24}
                        priority
                    />
                    <div>
                        <Text text={itemText} className={styles.fileItem} />
                    </div>
                </div>
                <div onClick={() => handleDelete(index, name)} className={styles.fileContainer2}>
                    <Image
                      src="/images/components/input/trash.svg"
                      alt="Delete File"
                      width={24}
                      height={24}
                      priority
                    />
                </div>
            </div>
        </li>
    )
}

export default ItemUploaded