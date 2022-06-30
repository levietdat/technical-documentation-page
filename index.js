$(function() {
    $(document).on('scroll',function() {
        let scroll = $(this).scrollTop();
        if(scroll > 4) {
            $('.right-header').css('display', 'none') ;
        }
        else {
            $('.right-header').css('display', 'block    ') ;
        }
    })
})