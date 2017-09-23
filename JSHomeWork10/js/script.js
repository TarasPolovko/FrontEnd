$(function() {
    $('.jcarousel').jcarousel();

    $('.jcarousel-control-prev')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '-=1'
        });

    $('.jcarousel-control-next')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '+=1'
        });

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        })
        .jcarouselPagination();

    // $("#cars").selectbox();

    $(".checkbox").each(function(){
        changeCheckStart($(this));
    });

    $(".nice-checkbox").each(function(){
        changeCheckStart($(this));
    });

    $(".checkbox").on("click", function() {
        changeCheck($(this));
    });    

    $(".nice-checkbox").on("click", function() {
        changeCheck($(this));
    });

    function changeCheck(el) {
        var input = el.find("input").eq(0);

        if(!el.hasClass("nice-checkbox-disabled")) {
            if (!input.attr("checked")) {
                el.css("background-position", "0 -17px")
                input.attr("checked", true);
            } else {
                el.css("background-position", "0 0");
                input.attr("checked", false);
            }  
        }
    }

    function changeCheckStart(el) {
        var input = el.find("input").eq(0);

        if(input.attr("checked")) {
            el.css("background-position", '0 -17px');
        }
    }

    $(".drop-down").hover(
        function(el) {
            $(this).children(".submenu").animate({"height":"toggle"}, "medium");
        },
        function() {
            $(this).children(".submenu").animate({"height":"toggle"}, "medium");
        }
    );


});

