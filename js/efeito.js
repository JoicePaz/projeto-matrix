jQuery(window).scroll(function() {

    if (jQuery(this).scrollTop()<440)
     {
      jQuery('#cardExp').fadeOut(300);  
     }
    else
     {
      jQuery('#cardExp').fadeIn(1000);
     }

     
    if (jQuery(this).scrollTop()<1100)
     {
      jQuery('#cardMentores').fadeOut(300);  
     }
    else
     {
      jQuery('#cardMentores').fadeIn(1200);
     }

     if (jQuery(this).scrollTop()<1770)
     {
      jQuery('#cardMembros1').fadeOut(300);  
     }
    else
     {
      jQuery('#cardMembros1').fadeIn(1200);
     }

     if (jQuery(this).scrollTop()<2280)
     {
      jQuery('#cardMembros2').fadeOut(300);  
     }
    else
     {
      jQuery('#cardMembros2').fadeIn(1200);
     }

     if (jQuery(this).scrollTop()<2800)
     {
      jQuery('#cardMembros3').fadeOut(300);  
     }
    else
     {
      jQuery('#cardMembros3').fadeIn(1200);
     }

     if (jQuery(this).scrollTop()<3280)
     {
      jQuery('#cardMembros4').fadeOut(300);  
     }
    else
     {
      jQuery('#cardMembros4').fadeIn(1250);
     }


 })