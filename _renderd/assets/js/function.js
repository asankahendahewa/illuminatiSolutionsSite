/*jslint browser: true*/
/*global $, jQuery, alert*/

//smoothScroll function is applied from the document ready function
function smoothScroll(duration) {
    "use strict";
    $('a[href^="#"]').on('click', function (event) {
        
        var target = $($(this).attr('href'));
        
        if (target.length) {
            event.preventDefault();
            $('html,body').animate({
                scrollTop: target.offset().top
            }, duration);
        }
    });
}

$(function () {
    "use strict";
    smoothScroll(100000);
});


