import React, { useState } from "react";
import styles from "../../../../styles/block-pages/success-stories/primary/carousel.module.css";
import useResponsive from "@/hooks/useResponsive";
import { useApiContext } from "@/context/wrappers/ContextProvider";
import Text from "@/components/Text";
import Image from "next/image";

const Carousel = () => {

    const isResponsive = useResponsive(768);
    const { t } = useApiContext()

    const titleText = {
        text: t('success-stories.primary.block5.title'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 20 : 48,
        color: 'orangeBase'
    }

    const slides = [
        {
            message: {
                text: t('success-stories.primary.block5.slide1.message'),
                tag: "p",
                font: isResponsive ? "poppinsItalic" : "poppinsLight",
                size: isResponsive ? 11 : 24,
                color: 'blackBase'
            },
            author: {
                text: t('success-stories.primary.block5.slide1.author'),
                tag: "p",
                font: "poppinsLight",
                size: isResponsive ? 10 : 24,
                color: 'blackBase'
            }
        },
        {
            message: {
                text: t('success-stories.primary.block5.slide2.message'),
                tag: "p",
                font: isResponsive ? "poppinsItalic" : "poppinsLight",
                size: isResponsive ? 11 : 24,
                color: 'blackBase'
            },
            author: {
                text: t('success-stories.primary.block5.slide2.author'),
                tag: "p",
                font: "poppinsLight",
                size: isResponsive ? 10 : 24,
                color: 'blackBase'
            }
        },
        {
            message: {
                text: t('success-stories.primary.block5.slide3.message'),
                tag: "p",
                font: isResponsive ? "poppinsItalic" : "poppinsLight",
                size: isResponsive ? 11 : 24,
                color: 'blackBase'
            },
            author: {
                text: t('success-stories.primary.block5.slide3.author'),
                tag: "p",
                font: "poppinsLight",
                size: isResponsive ? 10 : 24,
                color: 'blackBase'
            }
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className={styles.background}>
            <div className={styles.title}>
                <Text text={titleText} />
            </div>
            <div className={styles.carousel}>
                <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prevSlide}>
                    <Image
                        src={`/images/success-stories/primary/testimonies/arrow-left.svg`}
                        alt="Left Arrow"
                        width={!isResponsive ? 30 : 10}
                        height={!isResponsive ? 48 : 20}
                        priority
                    />
                </button>
                <div className={styles.slides} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div key={index} className={styles.slide}>
                            <div className={styles.message}><Text className={styles.messageText} text={slide.message} /></div>
                            <div className={styles.author}><Text text={slide.author} /></div>
                        </div>
                    ))}
                </div>
                <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={nextSlide}>
                    <Image
                        src={`/images/success-stories/primary/testimonies/arrow-right.svg`}
                        alt="Right Arrow"
                        width={!isResponsive ? 30 : 10}
                        height={!isResponsive ? 48 : 20}
                        priority
                    />
                </button>

            </div>
            <div className={styles.bullets}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`${styles.bullet} ${index === currentIndex ? styles.activeBullet : ""}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
