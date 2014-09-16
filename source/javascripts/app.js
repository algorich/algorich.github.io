/*
** Slide
*/

$(function () {
    $('.alg-slide').bxSlider({
        prevText: '<i class="glyphicon glyphicon-chevron-left"></i>',
        nextText: '<i class="glyphicon glyphicon-chevron-right"></i>'
    });
});

/*
** Sidebar
*/

function sidebarToggle () {
    $sidebar = $('#alg-sidebar');

    if ($sidebar.width() == '0') {
        $('#alg-sidebar').animate({ width: '700px' }, 200);
        $('#alg-shadow-overlay').fadeIn(200);
    } else {
        $('#alg-sidebar').animate({ width: '0' }, 200);
        $('#alg-shadow-overlay').fadeOut(200);
    }
}

/*
** Paralax
*/

// Will not be displayed on mobile devices

$(function(){
    if (jQuery.browser.mobile == false) {
        $.stellar({ horizontalScrolling: false });
    }
});