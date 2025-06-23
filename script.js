document.addEventListener('DOMContentLoaded', () => {
    const thumbSwiper = new Swiper(".thumbs-slider-wrapper", {
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesProgress: true,
        allowTouchMove: false
    });

    const mainSwiper = new Swiper(".main-slider-wrapper", {
        spaceBetween: 17,
        thumbs: {
            swiper: thumbSwiper,
        },
        slidesPerView: 1,
    });
});
