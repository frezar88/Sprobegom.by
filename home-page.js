
//----------init general slider-------------

let general_slider = new Swiper('.gerenal-slider ', {
    navigation: {
        nextEl: '.general-slider-swiper-button-next',
        prevEl: '.general-slider-swiper-button-prev',
    },
    effect: "fade",
    loopPreventsSlide: false,
    loop: true,
    speed: 1000,
    delayBetweenSlides: 22700,
    slidesPerView: 1,
    slidesPerGroup: 1,
});

//----------init special-offers-car slider-------------

let special_offers_slider = new Swiper('.special-offer-slider ', {
    loopPreventsSlide: false,
    loop: false,
    speed: 1000,
    spaceBetween: 20,
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
        el: ".car-special-offer-pagination",
        clickable: true,
        dynamicBullets: true,
    }, breakpoints: {
        420: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        728: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1300: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    }
});

//------All evets to scroll-------
function startScrollingEvents() {
    const salesInformationList = document.querySelector('.sales-information__list')
    const salesInformationParalax = document.querySelector('.sales-information__paralax')

    const benefitsPromoBlockList = document.querySelector('.benefits-promo-block-list')

    const workScheduleLst = document.querySelector('.work-schedule-list ')



    document.addEventListener('scroll', (e) => {
        startAllCounter(salesInformationList)
        paralaxSalesInformation(salesInformationParalax)
        benefitsPromoBlock(benefitsPromoBlockList)
        workSchedule(workScheduleLst)
    })


}


startScrollingEvents()

//-----------all animation-----------


//----------- benefits-promo-block

function benefitsPromoBlock(block) {
    let scrollingValue = block.getBoundingClientRect().y
    if (800 > scrollingValue && scrollingValue > -330) {
        if (block.className !== 'benefits-promo-block-list show') {
            block.classList.add('show')
        }
    }
}

//------------work-schedule-----------

function workSchedule(block) {
    let scrollingValue = block.getBoundingClientRect().y
    if (800 > scrollingValue && scrollingValue > -330) {
        if (block.className !== 'work-schedule-list show') {
            block.classList.add('show')
        }
    }
}

//-----SalesInformation-----
function startAllCounter(block) {
    if (block) {
        let brakePoint = block.getBoundingClientRect().y
        if (brakePoint < 815 && brakePoint > -150) {
            counter(40, 250, 'cars',)
            counter(40, 750201, 'sum',)
            counter(40, 100, 'Satisfaction',)
            counter(40, 3600, 'oil',)
        }
    }
}

function counter(ms, digit, className) {
    let currentBlock = document.getElementById(className)
    let counter = 0;
    let step = digit / ms
    if (currentBlock.className !== 'done') {
        currentBlock.classList.add('done')
        let interval = setInterval(() => {
            counter = counter + step
            currentBlock.innerHTML = String(Math.round(counter)).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            counter === digit || counter > digit ? clearInterval(interval) : false;
        }, ms)
    }
}

function paralaxSalesInformation(block) {
    if (block) {
        let brakePoint = block.getBoundingClientRect().y
        if (brakePoint < 850 && brakePoint > 100) {
            const temp = 90
            const stringValueBrakePoint = String(brakePoint).slice(0, 2)
            let correntValueBrakePoint = temp - stringValueBrakePoint
            block.style.backgroundPosition = `50% ${correntValueBrakePoint}%`
        }
    }

}

