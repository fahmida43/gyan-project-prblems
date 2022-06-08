//banner slider js start
$('.banner_slider').slick({
    prevArrow:'<span class="priv_arrow"><i class="fa-solid fa-angle-left"></i></span>',
    nextArrow:'<span class="next_arrow"><i class="fa-solid fa-angle-right"></i></span>',
    autoplaySpeed:500,
    dots:false,
  });
//banner slider js end//
//About slider js start
$('.about_slider').slick({
  prevArrow:false,
  nextArrow:false,
  autoplay:true,
  autoplaySpeed:900,
  dotsClass:'about_slider_dot',
  dots:true,
})
//About slider js end 

//counter up section start
$('.counter').counterUp({
  delay: 10,
  time: 2000
});
//counter up section end