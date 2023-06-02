$(function () {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
         $('#to-top_btn').fadeIn();
      } else {
         $('#to-top_btn').fadeOut();
      }
   });

   $('#to-top_btn').click(function () {
      $('body, html').animate({ scrollTop: 0 }, 0)
   });
});