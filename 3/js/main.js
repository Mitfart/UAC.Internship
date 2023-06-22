$(function () {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
         $('#to-top_btn').fadeIn();
      } else {
         $('#to-top_btn').fadeOut();
      }
   });

   $('#to-top_btn').click(function () {
      $('body, html').animate({scrollTop: 0}, 0)
   });

   /*
   https://codepen.io/dimsemenov/pen/kVbqdN
   ====== Zoom effect ======
   */
   $('.thumbnails').magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
         enabled: true
      },
      removalDelay: 500, //delay removal by X to allow out-animation
      callbacks: {
         beforeOpen: function () {
            // hack: adds mfp-anim class to markup
            this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
            this.st.mainClass = this.st.el.attr('data-effect');
         }
      },
      closeOnContentClick: true,
      midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
   })
});