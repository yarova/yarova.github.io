$(function(){

    $('.arrow').on('click', function(){
        $(this).siblings('.active').removeClass('active');
        $(this).removeClass('active');
        $(this).addClass('active');
    });

    $('input, textarea').placeholder();
});

