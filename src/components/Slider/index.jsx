import { useEffect, useState } from 'react';
import dataSlider from './dataSlider';
import BtnSlider from '../BtnSlider';
import styles from './Slider.module.scss';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    //Autoplay
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         nextSlide();
    //     }, 3000);
    //     return () => clearInterval(interval);
    // });

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === dataSlider.length) {
            setSlideIndex(1);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length);
        }
    };

    const moveDot = (index) => {
        setSlideIndex(index);
    };

    return (
        <div className={styles.container__slider}>
            {dataSlider.map((obj, index) => {
                return (
                    <div
                        className={slideIndex === index + 1 ? `${styles.slide} ${styles.active__anim}` : styles.slide}
                        key={obj.id}
                    >
                        <img src={process.env.PUBLIC_URL + `/imgs/img${index + 1}.jpg`} alt='' />
                    </div>
                );
            })}
            <BtnSlider moveSlide={nextSlide} direction='next' />
            <BtnSlider moveSlide={prevSlide} direction='prev' />
            <div className={styles.container__dots}>
                {Array.from({ length: dataSlider.length }).map((_, index) => (
                    <div
                        className={slideIndex === index + 1 ? `${styles.dot} ${styles.active}` : styles.dot}
                        onClick={() => moveDot(index + 1)}
                        key={index}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
