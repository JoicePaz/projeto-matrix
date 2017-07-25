jQuery('#cardExp').fadeOut();
jQuery('#cardMentores').fadeOut();
jQuery('#cardMembros1').fadeOut();
jQuery('#cardMembros2').fadeOut();
jQuery('#cardMembros3').fadeOut();
jQuery('#cardMembros4').fadeOut();

jQuery(window).scroll(function () {

    if (jQuery(this).scrollTop() > 250) {
        jQuery('#cardExp').fadeIn(1400);
    }

    if (jQuery(this).scrollTop() > 970) {
        jQuery('#cardMentores').fadeIn(1400);
    }

    if (jQuery(this).scrollTop() > 1580) {
        jQuery('#cardMembros1').fadeIn(1400);
    }

    if (jQuery(this).scrollTop() > 2100) {
        jQuery('#cardMembros2').fadeIn(1400);
    }

    if (jQuery(this).scrollTop() > 2615) {
        jQuery('#cardMembros3').fadeIn(1400);
    }

    if (jQuery(this).scrollTop() > 3060) {
        jQuery('#cardMembros4').fadeIn(1400);
    }
})