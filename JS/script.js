var Slider_ss = $('#slider-ss');
var Special_suggest = $('#product-special-suggest');
var Best_seller = $('#product-special-suggest-second');
var End_seasen = $('#product-special-suggest-third')
Slider_ss.owlCarousel({
      items:1,
      loop:true,
      nav:true,
      margin:2,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true, 
})
Special_suggest.owlCarousel({
      loop:true,
      dots:false,
      nav:false,
      center:true,
      freeDrag:true,
      autoWidth:true,
      autoplay:true,
      autoplayTimeout:10000,
      autoplayHoverPause:true,
      responsive : {
            200 : {
                  items:2,
                  margin:5
            },
            600 : {
                  items:3,
                  margin:10
            },
            800 : {
                  items:4,
            },
            1000 : {
                  items:5,
            },
            1200 : {
                  items:6,
                  margin:30
            }
      }
})
Best_seller.owlCarousel({
      loop:true,
      dots:false,
      nav:false,
      center:true,
      freeDrag:true,
      autoWidth:true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      responsive : {
            200 : {
                  items:2,
                  margin:5
            },
            600 : {
                  items:3,
                  margin:10
            },
            800 : {
                  items:4,
            },
            1000 : {
                  items:5,
            },
            1200 : {
                  items:6,
                  margin:30
            }
      }
})
End_seasen.owlCarousel({
      loop:true,
      dots:false,
      autoWidth:true,
      nav:false,
      center:true,
      freeDrag:true,
      autoplay:true,
      autoplayTimeout:8000,
      autoplayHoverPause:true,
      responsive : {
            200 : {
                  items:2,
                  margin:5
            },
            600 : {
                  items:3,
                  margin:10
            },
            800 : {
                  items:4,
            },
            1000 : {
                  items:5,
            },
            1200 : {
                  items:6,
                  margin:30
            }
      }
})
$('#best-seller-next').click(function(){
      Best_seller.trigger('next.owl.carousel');
})
$('#best-seller-prev').click(function(){
      Best_seller.trigger('prev.owl.carousel');
})
$('#best-seller-next-third').click(function(){
      End_seasen.trigger('next.owl.carousel');
})
$('#best-seller-prev-third').click(function(){
      End_seasen.trigger('prev.owl.carousel');
})
$('#open-login-box').click(function(){
      $('.login').addClass('login-show');
      $('body').addClass('stop-scrolling');
});
$('#close-login').click(function(){
      $('.login').removeClass('login-show');
      $('body').removeClass('stop-scrolling');
});
$('.login').click(function(e){
      if(e.target !== this)
      return;
      $('.login').removeClass('login-show');
      $('body').removeClass('stop-scrolling');
});
$('.menu-dropdown').click(function(){
      $('.dropdown').toggleClass('dropdown-show');
});
$('.dropdown-content').menuAim({
      activate : function(row){
            $(row).children().addClass('is-active');
            $(row).children().addClass('secondary-menu-show');
      },
      deactivate : function(row){
            $(row).children().removeClass('is-active');
            $(row).children().removeClass('secondary-menu-show');
      },
      exitMenu:function(){
            $('.dropdown-content').find('.is-active').removeClass('is-active');
            return true;
      }
})