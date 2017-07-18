jQuery('#cardExp').fadeOut();
jQuery('#cardMentores').fadeOut();
jQuery('#cardMembros1').fadeOut();
jQuery('#cardMembros2').fadeOut();
jQuery('#cardMembros3').fadeOut();
jQuery('#cardMembros4').fadeOut();

jQuery(window).scroll(function() {

    if (jQuery(this).scrollTop()>250) {
        jQuery('#cardExp').fadeIn(1300);
    }
     
    if (jQuery(this).scrollTop()>850) {
        jQuery('#cardMentores').fadeIn(1300);
    }

    if (jQuery(this).scrollTop()>1480) {
        jQuery('#cardMembros1').fadeIn(1300);
    }

    if (jQuery(this).scrollTop()>1930) {
        jQuery('#cardMembros2').fadeIn(1300);
    }

    if (jQuery(this).scrollTop()>2405) {
        jQuery('#cardMembros3').fadeIn(1300);
    }

    if (jQuery(this).scrollTop()>2850) {
        jQuery('#cardMembros4').fadeIn(1300);
    }
 })