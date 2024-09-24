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

    const handleScroll = () => {
        const viewportThreshold = window.innerHeight * 0.6;
        textRefs.current.forEach((el, index) => {
            const rect = el.getBoundingClientRect();
            const elementCenter = rect.top + rect.height / 2;
            if (Math.abs(elementCenter - viewportThreshold) < rect.height / 2) {
                setActiveIndex(index);
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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

export default Transform;