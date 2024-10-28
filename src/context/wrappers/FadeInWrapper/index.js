import { useEffect, useRef, useState } from "react";
import styles from "../../../styles/context/wrappers/fadeinwrapper.module.css";

const FadeInWrapper = ({
    children,
    type = 'fadein',
    replay = false,
    speed = '1s',
    animationSize = 'normal',
    ...rest
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else if (replay) {
                        setIsVisible(false);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        const currentWrapper = wrapperRef.current;
        if (currentWrapper) {
            observer.observe(currentWrapper);
        }

        return () => {
            if (currentWrapper) {
                observer.unobserve(currentWrapper);
            }
        };
    }, [replay]);

    const validTypes = ['fadein', 'fadeinup', 'fadeinright', 'fadeinleft', 'fadeindown'];
    const finalType = validTypes.includes(type) ? type : 'fadein';
    const speedStyles =
        speed === '.2s' ? styles.speed02s :
            speed === '.5s' ? styles.speed05s : styles.speed1s
    const wrapperClass = `${rest?.className ? rest?.className : ''} ${speedStyles} ${styles.wrapper} ${styles[`${finalType}${animationSize}`]} ${isVisible ? styles.visible : ""}`;

    return (
        <div {...rest} ref={wrapperRef} className={wrapperClass}>
            {children}
        </div>
    );
};

export default FadeInWrapper;
