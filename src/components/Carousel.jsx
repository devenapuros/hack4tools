import { ChevronLeft } from "@/icons/ChevronLeft";
import { ChevronRight } from "@/icons/ChevronRight";
import styles from "@/styles/carousel.module.css";
import { useEffect, useRef, useState } from "react";
import { CarouselItem } from "./CarouselItem";
import { CarouselIndicator } from "./CarouselIndicator";
import { autoScroll } from "@/modules/autoScroll";

const DIRECTIONS = {
    left: -1,
    right: 1,
};

export const Carousel = ({ tools = [] }) => {
    let autoScrollTimer;
    const [currentSlide, setCurrentSlide] = useState(0);
    const containerRef = useRef();
    const viewportRef = useRef();
    const options = {
        root: viewportRef.current,
        rootMargin: "0px",
        threshold: 0.5,
    };

    useEffect(() => {
        viewportRef.current.scroll(0, 0);
        let observer = new IntersectionObserver(detectScroll, options);
        for (let i = 0; i < viewportRef.current.children.length; i++) {
            observer.observe(viewportRef.current.children[i]);
        }
        return () => clearTimeout(autoScrollTimer);
    }, []);

    useEffect(() => {
        clearInterval(autoScrollTimer);
        autoScrollTimer = setTimeout(
            autoScroll,
            5000,
            viewportRef,
            currentSlide,
            tools.length
        );
        return () => clearTimeout(autoScrollTimer);
    }, [currentSlide]);

    const detectScroll = (entries) => {
        let nextSlide;
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                nextSlide = parseInt(entry.target.getAttribute("data-index"));
                setCurrentSlide(nextSlide);
            }
        });
    };

    const doScroll = (direction = 1) => {
        let nextSlide = currentSlide + direction;
        if (nextSlide < 0) {
            nextSlide = tools.length - 1;
        } else if (nextSlide >= tools.length) {
            nextSlide = 0;
        }
        const containerWidth = containerRef.current.clientWidth;
        viewportRef.current.scroll(nextSlide * containerWidth, 0);
    };

    return (
        <div className={styles.container} ref={containerRef}>
            <ul className={styles.viewport} ref={viewportRef}>
                {tools.map((tool, index) => (
                    <CarouselItem key={index} tool={tool} dataIndex={index} />
                ))}
            </ul>
            <CarouselIndicator
                currentSlide={currentSlide}
                totalSlides={tools.length}
            />
            <button
                className={styles.actionLeft}
                onClick={() => {
                    doScroll(DIRECTIONS.left);
                }}
            >
                <ChevronLeft size={21} />
            </button>
            <button
                className={styles.actionRight}
                onClick={() => {
                    doScroll(DIRECTIONS.right);
                }}
            >
                <ChevronRight size={21} />
            </button>
        </div>
    );
};
