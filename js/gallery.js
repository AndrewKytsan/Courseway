$(".partners").slick({
  arrows: true,
  adaptiveHeight: true,
  slidesToShow: 3,
  speed: 500,
  easing: "ease",
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1500,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});
