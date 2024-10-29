'use client';
import { useApiContext } from "@/context/wrappers/ContextProvider";
import styles from "../../../styles/block-pages/home/transform.module.css";
import { useEffect, useRef, useState } from "react";

const Transform = () => {
    const { t } = useApiContext();

    const [activeIndex, setActiveIndex] = useState(null);
    const textRefs = useRef([]);

    const transformText = [
        { texts: [t('home.block2.text1')] },
        { texts: [t('home.block2.text2')] },
        { texts: [t('home.block2.text3')] },
        { texts: [t('home.block2.text4'), t('home.block2.text5')] }
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
                {transformText.map((group, groupIndex) => (
                    <div key={groupIndex} className={styles.group}>
                        {group.texts.map((text, textIndex) => {
                            const globalIndex = transformText.slice(0, groupIndex).reduce((sum, g) => sum + g.texts.length, 0) + textIndex;
                            const isLastInGroup = textIndex === group.texts.length - 1;
                            const isActive = globalIndex === activeIndex;
                            return (
                                <span key={textIndex} style={{ display: 'inline' }}>
                                    <p
                                        ref={(el) => {
                                            if (el && textRefs.current.indexOf(el) === -1) {
                                                textRefs.current.push(el);
                                            }
                                        }}
                                        className={`${styles.fadeIn} ${isActive && isLastInGroup ? styles.textBlue : styles.textGray}`}
                                    >
                                        {text}&nbsp;
                                    </p>
                                </span>
                            );
                        })}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Transform;