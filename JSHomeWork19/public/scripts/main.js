$(function() {

    // CAROUSEL
    var $carouselButton = $('.carousel__button');
    var $carouselBody = $('.carousel__body');

    $carouselButton.on('click', function(e) {
        var currentButton = $(this);
        var buttonPosition = +$(this).html() - 1;

        $carouselButton.removeClass('carousel__button_active');
        currentButton.addClass('carousel__button_active');

        $carouselBody.animate({ "left": -1200 * buttonPosition + "px" }, "medium");
    });

    // BANNERS PLACE PANEL
    var isMoving = false;

    $('.panel__item').on("click", function() {
        if (isMoving) {
            return;
        }

        var text = $(this).find('.panel__text');
        var header = $(this).find('.panel__header');
        var statusIcon = $(this).find('.panel__status');

        isMoving = true;
        
        text.animate({ "height": "toggle", "padding-top": "toggle", "padding-bottom": "toggle" }, 300, function(){
        	isMoving = false;
        });
        header.toggleClass("panel__header_active");
        statusIcon.toggleClass("panel__status_active");

        if (statusIcon.html().charCodeAt(0) === 8211) {
            statusIcon.html("&#43;");
        } else {
            statusIcon.html("&#8211;");
        }
    });

});