import styles from "../../../../styles/block-pages/success-stories/gentera/cover.module.css"
import Image from "next/image";

const Cover = () => {
    return (
        <div className={styles.background}>
            <Image
                src="/images/success-stories/banking-grupogentera/main/background.png"
                alt="Gentera"
                width={1920}
                height={1080}
                priority
                layout="responsive"
            />
        </div>
    )
}

export default Cover