$(function () {
 

  $('.footer-top__title').on('click', function(){
    $(this).next().slideToggle();
    $(this).toggleClass('footer-top__list--active');
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu-list--active');
  });

  $('.filter-category__label').on('click', function(){
    $('.filter-category__label').removeClass('filter-category__label--active');
    $(this).addClass('filter-category__label--active');
  })

  $('.pagination__link').on('click', function(){
    $('.pagination__link').removeClass('pagination__link--active');
    $(this).addClass('pagination__link--active');
  });

  $('.related-top__arrow').on('click', function(){
    $('.related-top__arrow').removeClass('related-top__arrow--active');
    $(this).addClass('related-top__arrow--active');
  });

  $('.product-tabs__top-item').on('click', function(e){
   e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.product-one__item-num').styler();

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpead: 2000
  });

  $(".star").rateYo({
    starWidth: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });


  var mixer = mixitup('.categories-products');
  var mixer = mixitup('.design__items');
});