import { useEffect, useState } from "react";
import Text from "@/components/Text";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../styles/block-pages/home/welcome.module.css";
import useResponsive from "@/hooks/useResponsive";
import FadeInWrapper from "@/context/wrappers/FadeInWrapper";
import Image from "next/image";

const Welcome = () => {
    const { t } = useApiContext();
    const isResponsive = useResponsive(768);
    const [isVisible, setIsVisible] = useState(false);

    const welcomeText = [
        {
            text: t('home.block1.welcome'),
            tag: "p",
            font: !isResponsive ? "poppinsSemiBold" : "poppinsBold",
            size: !isResponsive ? 32 : 20,
            color: 'whiteBase',
        }
    ];

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <section className={styles.background}>
            <div className={styles.wrapper}>
                {isVisible && (
                    <FadeInWrapper type="fadein">
                        <Text texts={welcomeText} className={styles.title} />
                        <div className={styles.inventia}>
                            <Image
                                src="/images/home/welcome/main-logo.png"
                                alt="Inventia Lab"
                                width={isResponsive ? 210 : 555}
                                height={isResponsive ? 31 : 100}
                            />
                        </div>
                    </FadeInWrapper>
                )}
            </div>
        </section>
    );
};

export default Welcome;


// import Text from "@/components/Text";
// import { useApiContext } from "@/context/wrappers/ContextProvider";
// import styles from "../../../styles/block-pages/home/welcome.module.css"
// import useResponsive from "@/hooks/useResponsive";
// import FadeInWrapper from "@/context/wrappers/FadeInWrapper";
// import Image from "next/image";

// const Welcome = () => {

//     const { t } = useApiContext()
//     const isResponsive = useResponsive(768)

//     const welcomeText = [
//         {
//             text: t('home.block1.welcome'),
//             tag: "p",
//             font: !isResponsive ? "poppinsSemiBold" : "poppinsBold",
//             size: !isResponsive ? 32 : 20,
//             color: 'whiteBase',
//         }
//     ];

//     return (
//         <section className={styles.background}>
//             <div className={styles.wrapper}>
//                 <FadeInWrapper type="fadein" replay={true} speed="1s">
//                     <Text texts={welcomeText} className={styles.title} />
//                     <div className={styles.inventia}>
//                         <Image
//                             src="/images/home/welcome/main-logo.png"
//                             alt="Inventia Lab"
//                             width={isResponsive ? 210 : 555}
//                             height={isResponsive ? 31 : 100}
//                         />
//                     </div>
//                 </FadeInWrapper>
//             </div>
//         </section>
//     )
// }

// export default Welcome