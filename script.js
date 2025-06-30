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

    // Key Effects Sliders

    const automaticSelectionSlider = new Swiper("#automatic-selection", {
        spaceBetween: 18,
        slidesPerView: 'auto',
        allowTouchMove: false,
        navigation: {
            nextEl: '.automatic-selection-next',
            prevEl: '.automatic-selection-prev',
        },
        breakpoints: {
            10: {
                slidesPerView: 1,
                allowTouchMove: true,
            },
            865: {
                slidesPerView: 'auto',
                allowTouchMove: false,
            },
        }
    });

    const performanceManagementSlider = new Swiper("#performance-management", {
        spaceBetween: 18,
        slidesPerView: 'auto',
        allowTouchMove: false,
        navigation: {
            nextEl: '.performance-management-next',
            prevEl: '.performance-management-prev',
        },
        breakpoints: {
            10: {
                slidesPerView: 1,
                allowTouchMove: true,
            },
            865: {
                slidesPerView: 'auto',
                allowTouchMove: false,
            },
        }
    });
});