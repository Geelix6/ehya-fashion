$(document).ready(function () {
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    document
      .querySelector(".header-bottom")
      .classList.toggle("header-bottom--visible");
  });
  var menuButtonClose = $(".header-bottom__close");
  menuButtonClose.on("click", function () {
    document
      .querySelector(".header-bottom")
      .classList.toggle("header-bottom--visible");
  });
  var tabsItem = $(".trending__link");
  var contentItem = $(".trending-grid");
  tabsItem.on("click", function (event) {
    event.preventDefault();
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("trending__link--active");
    contentItem.removeClass("trending-grid--active");
    $(activeContent).addClass("trending-grid--active");
    $(this).addClass("trending__link--active");
  });
  var mySwiper = new Swiper(".comment-slider", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
    },
    autoplay: {
      delay: 7000,
    },
    // Navigation arrows
    //navigation: {
    //  nextEl: ".swiper-button-next",
    //  prevEl: ".swiper-button-prev",
    //},
  });
  var swiper = new Swiper(".story-slider", {
    slidesPerView: 2,
    spaceBetween: 18,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".story__button-slide--next",
      prevEl: ".story__button-slide--prev",
    },
  });
  var swiperMobile = new Swiper(".story-mobile", {
    direction: "horizontal",
    loop: true,
    navigation: {
      nextEl: ".story__button-slide--next-mobile",
      prevEl: ".story__button-slide--prev-mobile",
    },
  });
  var mySwiperMouseOver = $(".comment-slider");
  mySwiperMouseOver.on("mouseover", function () {
    mySwiper.autoplay.stop();
  });
  mySwiperMouseOver.on("mouseout", function () {
    mySwiper.autoplay.start();
  });
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        email: {
          required: "Enter your email",
          email: "format must be: name@domain.com",
          minlength: "The address is too short",
        },
      },
    });
  });
  var arrowRight = $(".story__button-slide--next");
  var arrowLeft = $(".story__button-slide--prev");
  arrowRight.on("mouseover", function () {
    right.setAttribute("fill", "#183B56");
  });
  arrowRight.on("mouseout", function () {
    right.setAttribute("fill", "#959EAD");
  });
  arrowLeft.on("mouseover", function () {
    left.setAttribute("fill", "#183B56");
  });
  arrowLeft.on("mouseout", function () {
    left.setAttribute("fill", "#959EAD");
  });
});
