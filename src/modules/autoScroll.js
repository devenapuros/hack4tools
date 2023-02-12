export const autoScroll = (componentRef, currentSlide, totalSlides) => {
    let nextSlide = currentSlide + 1;
    if (nextSlide >= totalSlides) {
        nextSlide = 0;
    }
    const containerWidth = componentRef.current.clientWidth;
    componentRef.current.scroll(nextSlide * containerWidth, 0);
};
