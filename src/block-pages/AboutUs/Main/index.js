import Image from "next/image"
import styles from "../../../styles/block-pages/about-us/main.module.css"

const Main = () => {
    return (
        <div className={styles.background}>
            <Image
                src="/images/about-us/main/background.jpg"
                alt="About Us"
                width={1920}
                height={1080}
                priority
                layout="responsive"
            />
        </div>
    )
}

export default Main