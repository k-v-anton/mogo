//=========БУРГЕР МЕНЮ=========//
$(document).ready(function () {
    $('#nav-title').click((e) => {
        $("#nav-menu").slideToggle(500, "linear")
        $("#main-container").slideToggle(500, "linear")
    }) 
    $('#burger').click(function () {
		$('#burger').toggleClass('x-burger', 'burger');
		});
});

//=========СКРОЛЛ ШАПКИ=========//
$(window).on("scroll", function () {
    console.log($(window).scrollTop(), $('#navigation').attr("class"))

    $('#navigation').toggleClass('scrolled', $(window).scrollTop() > 1)
});

// =========СЛИК СЛАЙД ЛДЯ MAIN=========//
$(document).ready(function(){
    $('#substrate__big-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
    });
});

// =========ВЫПАДАЮЩИЕ ЭЛЕМЕНТЫ========= //
$(document).ready(function () {
    $('#itemarrowone').click((e) => {
        $("#itemMainOne").slideToggle(500, "linear")
        $('#itemarrowone').toggleClass('item__arrow-checked ', 'item__arrow');
    }) 
    $('#itemarrowtwo').click((e) => {
        $("#itemMainTwo").slideToggle(500, "linear")
        $('#itemarrowtwo').toggleClass('item__arrow-checked ', 'item__arrow');
    }) 
    $('#itemarrowthree').click((e) => {
        $("#itemMainThree").slideToggle(500, "linear")
        $('#itemarrowthree').toggleClass('item__arrow-checked ', 'item__arrow');
    }) 
});

// =========СЛИК СЛАЙД ЛДЯ РЕВЬЮ=========//
$(document).ready(function(){
    $('#review-slider-one').slick({
        arrows: true,
        dots: true,
        autoplay: true,
    })
    $('#review-slider-two').slick({
        arrows: true,
        dots: true,
        autoplay: true,
    });
});




//=========КАРТА=========//
$(document).ready(function () {
    $('#map-title-box').click((e) => {
        $(".map-box").slideToggle(500, "linear")
    }) 
});






// // ----------------ПЛАВНЫЙ СКРОЛЛ К ЯКАРЮ -------------------//
// $("a.nav-menu__link").on("click", function (e) {
//     e.preventDefault();
//     var anchor = $(this).attr('href');
//     $('html, body').stop().animate({
//         scrollTop: $(anchor).offset().top - 60
//     }, 800);
// });

// $("a.logo").on("click", function (e) {
//     e.preventDefault();
//     var anchor = $(this).attr('href');
//     $('html, body').stop().animate({
//         scrollTop: $(anchor).offset().top - 60
//     }, 800);
// });

// // --------------------СЛИК СЛАЙД----------------------- //
// $(document).ready(function () {
//     $('.slider').slick({
//         arrows: false,
//         dots: true,
//         autoplay: true,
//         autoplaySpeed: 4000,
//         pauseOnFocus: true,
//         waitForAnimate: true,
//         wariableWidth: true,
//         easing: 'easeOutCirc',

//     });


// });





// =========ФУНКЦИИ ДЛЯ СЛИКСЛАЙД=========//

//         arrows: false, //стрелки навигации
//         dots: true, // точки навигации
//         adaptiveHeight: true, //автоматическая адаптивная высота слайдера
//         slidesToShow: 3, // количество слайдов отображаемых за раз
//         slidesToScroll: 1, //колво слайдов пролистываемых за одно нажатие стрелки или кнопки
//         speed: 1000, // скорость пролистывания слайдов
//         easing: 'ease', //  тип анимации при смене слайда
//         infinite: true, // бесконечный слайдер или нет
//         initialSlide: 0, // указывает стартовый слайд
//         autoplay: false, //автоматическое проигрывание слайдов
//         autoplaySpeed: 0, // время автосмены слайдов
//         pauseOnFocus: false, // пауза при нажатии на слайд
//         pauseOnHover: false, // пауза при наведении на слайд
//         pauseOnDotsHover: false, // пауза при наведении на точки
//         draggable: true, // возможность управления слайдами мышью на пк
//         swipe: true, // возможность управления слайдами на мобильных устройствах
//         waitForAnimate: true, // переход на следующий слайд после завершения анимации
//         centerMode: false, // дает возможность задать доп свойства центральному слайду
//         wariableWidth: true, // автоматический адаптивный слайдер, выключает ширину контейнера
//         rows: 1, // указывает количество рядов в слайде
//         slidesPerRow: 1, //указывает количество колонок в слайде
//         vertical: false, // включает вертикальный слайдер
//         verticalSwiping: false, //вертикальная прокрутка
//         asNavFor: '', //связывает два слайдера, в ковычках имя второго слайда. Во втором слайде все наоборот
//         responsive:[ 
//             {
//                 breakpoint:1024,
//                 settings: {
//                     slidesToShow: 2,
//                 }
//             },  
//             {
//                 breakpoint:600,
//                 settings: {
//                     slidesToShow: 1,
//                 }
//             }, 
//         ]  // при заданном брейкпоинте позволяет менять свойства слайдера
