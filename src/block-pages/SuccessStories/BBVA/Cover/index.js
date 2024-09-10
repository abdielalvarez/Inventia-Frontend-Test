import styles from "../../../../styles/block-pages/success-stories/bbva/cover.module.css"
import Image from "next/image";

const Cover = () => {
    return (
        <div className={styles.background}>
            <Image
                src="/images/success-stories/banking-bbva/main/background.jpg"
                alt="BBVA"
                width={1920}
                height={1080}
                priority
                layout="responsive"
            />
        </div>
    )
}

export default Cover