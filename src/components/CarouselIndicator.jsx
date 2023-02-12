import styles from "@/styles/carouselIndicator.module.css";

export const CarouselIndicator = ({ currentSlide = 0, totalSlides = 0 }) => {
    return (
        <div className={styles.container}>
            {Array.from({ length: totalSlides }).map((_, index) => (
                <div
                    key={index}
                    className={`${styles.dot} ${
                        currentSlide === index && styles.active
                    }`}
                ></div>
            ))}
        </div>
    );
};
