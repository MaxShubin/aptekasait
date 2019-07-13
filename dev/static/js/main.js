$(document).ready(function () {
    svg4everybody({});

    let mainSubnavHover = function () {
        $('.main-subnav__item').hover(
            function () {
                let parentList = $(this).closest('.main-subnav__list');
                if ($(this).children('.main-subnav__list').length) {
                    let catNavHeight = $(this).children('.main-subnav__list').outerHeight();
                    if (parentList.outerHeight() < catNavHeight) {
                        parentList.css('height', catNavHeight);
                    }
                    parentList.css('width', '720');
                }
            }, function () {
                let parentList = $(this).closest('.main-subnav__list');
                parentList.css('height', 'auto');
                parentList.css('width', 'auto');
            }
        )
    };

    let openSearchForm = function () {
        $(document).on('click','.search__icon',function () {
            $(this).parent().addClass('search--open');
        });
    };

    let clearSearchForm = function () {
        $(document).on('click','.search__clear',function () {
            $('.search__input').val('');
        });
    };

    let bannerSlider = function () {
        $('.js-banner').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: ".banner__navigation--prev",
            nextArrow: ".banner__navigation--next",
            dots: true,
            customPaging : function(slider, i) {
                return '<a class="banner__dot"></a>';
            },
            appendDots: '.banner__dots'
        })
    };

    let tabs = function (){
        $('.tabs-navigation__item').click(function() {
            let tabName = $(this).attr('show-tab');
                tabsBody = $(this).closest('.tabs').find('.tabs__body')[0];
                tab = $(tabsBody).find('.'+tabName);
            $(this).addClass('tabs-navigation__item--active').siblings().removeClass('tabs-navigation__item--active');
            $(tab).addClass('tab--active').siblings().removeClass('tab--active');
            if ($(tabsBody).find('.js-products-line-slider').length){
                    $('.js-products-line-slider').each(function () {
                        $(this).slick('refresh');
                    });
                    $('.js-product-prev__slider').each(function () {
                        $(this).slick('refresh');
                    });
            }
        });
    };

    let productLineSlider = function () {
        $('.js-products-line-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1
        })
    };


    mainSubnavHover();
    openSearchForm();
    clearSearchForm();
    bannerSlider();
    tabs();
    productLineSlider();
});