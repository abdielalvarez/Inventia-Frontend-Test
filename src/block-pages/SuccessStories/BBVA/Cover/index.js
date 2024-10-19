import useResponsive from "@/hooks/useResponsive";
import styles from "../../../../styles/block-pages/success-stories/bbva/cover.module.css"
import Image from "next/image";

const Cover = () => {

    const is768 = useResponsive(768);

    return (
        <div className={styles.background}>
            <Image
                src="/images/success-stories/banking-bbva/main/background.png"
                alt="BBVA"
                width={is768 ? 544 : 1920}
                height={is768 ? 170 : 1080}
                priority
                layout="responsive"
            />
        </div>
    )
}

export default Cover