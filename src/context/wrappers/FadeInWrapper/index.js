import { useEffect, useRef, useState } from "react";
import styles from "../../../styles/context/wrappers/fadeinwrapper.module.css";

const FadeInWrapper = ({ children, type = 'fadein', replay = false }) => {
    const [isVisible, setIsVisible] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Hacer visible cuando entra en la vista
                        setIsVisible(true);
                    } else if (replay) {
                        // Si sale de la vista y replay es true, reiniciar la visibilidad
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
    }, [replay]); // Dependencia de replay

    // Validar tipo
    const validTypes = ['fadein', 'fadeinup', 'fadeinright', 'fadeinleft', 'fadeindown'];
    const finalType = validTypes.includes(type) ? type : 'fadein';

    // Construcción de clase para el wrapper
    const wrapperClass = `${styles.wrapper} ${styles[finalType]} ${isVisible ? styles.visible : ""}`;

    return (
        <div ref={wrapperRef} className={wrapperClass}>
            {children}
        </div>
    );
};

export default FadeInWrapper;
