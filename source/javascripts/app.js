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

$(function () {
    $.stellar({ horizontalScrolling: false });
});

/*
** Tooltip
*/

$(function() {
// ALGORICH: changed default behaviour from template.
$('.tip').tooltip({ html: true });
});