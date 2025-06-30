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

    const talentManagementSlider = new Swiper("#talent-management", {
        spaceBetween: 18,
        slidesPerView: 'auto',
        allowTouchMove: false,
        navigation: {
            nextEl: '.talent-management-next',
            prevEl: '.talent-management-prev',
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

    const LKkedoSlider = new Swiper("#LK-kedo", {
        spaceBetween: 18,
        slidesPerView: 'auto',
        allowTouchMove: false,
        navigation: {
            nextEl: '.LK-kedo-next',
            prevEl: '.LK-kedo-prev',
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

    const cafeteryOfBenefitsSlider = new Swiper("#cafetery-of-benefits", {
        spaceBetween: 18,
        slidesPerView: 'auto',
        allowTouchMove: false,
        navigation: {
            nextEl: '.cafetery-of-benefits-next',
            prevEl: '.cafetery-of-benefits-prev',
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