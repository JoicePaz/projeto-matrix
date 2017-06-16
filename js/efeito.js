jQuery(window).scroll(function() {

    if (jQuery(this).scrollTop()<900)
     {
      jQuery('.card').fadeOut();  
     }
    else
     {
      jQuery('.card').fadeIn();
     }
 })