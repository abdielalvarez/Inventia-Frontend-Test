import useResponsive from "@/hooks/useResponsive";
import styles from "../../../../styles/block-pages/success-stories/ion/cover.module.css"
import Image from "next/image";

const Cover = () => {

    const is768 = useResponsive(768);

    return (
        <div className={styles.background}>
            <Image
                src="/images/success-stories/banking-financierapodemosprogresar/main/background.jpg"
                alt="Financiera Podemos Progresar"
                width={is768 ? 384 : 1920}
                height={is768 ? 128 : 1080}
                priority
                layout="responsive"
            />
        </div>
    )
}

export default Cover