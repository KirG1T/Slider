import styles from './BtnSlider.module.scss';
import leftArrow from './icons/left-arrow.svg';
import rightArrow from './icons/right-arrow.svg';

const BtnSlider = ({ moveSlide, direction }) => {
    return (
        <button
            className={
                direction === 'next' ? `${styles.btn__slide} ${styles.next}` : `${styles.btn__slide} ${styles.prev}`
            }
            onClick={moveSlide}
        >
            <img
                src={direction === 'next' ? rightArrow : leftArrow}
                alt={direction === 'next' ? 'nextSlide' : 'previousSlide'}
            />
        </button>
    );
};

export default BtnSlider;
