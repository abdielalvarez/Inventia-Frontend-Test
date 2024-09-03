'use client'
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../styles/block-pages/home/transform.module.css"
import { useEffect, useRef, useState } from "react";

const Transform = () => {

    const { t } = useApiContext()

    const [activeIndex, setActiveIndex] = useState(null);
    const textRefs = useRef([]);

    const transformText = [
        t('home.block2.text1'),
        t('home.block2.text2'),
        t('home.block2.text3'),
        t('home.block2.text4'),
    ];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = textRefs.current.indexOf(entry.target);
                    setActiveIndex(index);
                }
            });
        }, observerOptions);

        textRefs.current.forEach((el) => el && observer.observe(el));

        return () => {
            textRefs.current.forEach((el) => el && observer.unobserve(el));
        };
    }, [textRefs]);

    return (
        <section className={styles.background}>
            <div className={styles.wrapper}>
                {transformText.map((text, index) => (
                    <p
                        key={index}
                        ref={(el) => {
                            if (el && textRefs.current.indexOf(el) === -1) {
                                textRefs.current.push(el);
                            }
                        }}
                        className={`${styles.fadeIn} ${index === activeIndex ? styles.textBlue : styles.textGray}`}
                    >
                        {text}
                    </p>
                ))}
            </div>
        </section>

    )
}

export default Transform