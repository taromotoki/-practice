$(function(){
  $('.slick-slider').slick({
    autoplay: true,
    dots: true,
  });

  $('.js-tab li').on('click', function(){
    var index = $('.js-tab li').index(this);
    $('.js-tab li,.js-tab-contents').removeClass('is-active');
    $('.js-tab li').eq(index).addClass('is-active');
    $('.js-tab-contents').eq(index).addClass('is-active');
  });

  $(window).on('scroll', function(){
    if($(this).scrollTop() > 200) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }
  });

  $('a[href^="#"]').click(function(){
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop:position
    }, 500, "swing");
    return false;
  });
});