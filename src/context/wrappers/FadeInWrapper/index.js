import { useEffect, useRef, useState } from "react";
import styles from "../../../styles/context/wrappers/fadeinwrapper.module.css";

const FadeInWrapper = ({ children, type = 'fadein', replay = false, ...rest }) => {
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

    const wrapperClass = `${rest?.className ? rest?.className : ''} ${styles.wrapper} ${styles[finalType]} ${isVisible ? styles.visible : ""}`;

    return (
        <div {...rest} ref={wrapperRef} className={wrapperClass}>
            {children}
        </div>
    );
};

export default FadeInWrapper;
