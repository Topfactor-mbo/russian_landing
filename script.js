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
});