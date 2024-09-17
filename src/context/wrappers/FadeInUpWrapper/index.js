import { useEffect, useRef, useState } from "react";
import styles from "../../../styles/context/wrappers/fadeinupwrapper.module.css";

const FadeInUpWrapper = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
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
    }, []);

    return (
        <div ref={wrapperRef} className={`${styles.wrapper} ${isVisible ? styles.visible : ""}`}>
            {children}
        </div>
    );
};

export default FadeInUpWrapper;
