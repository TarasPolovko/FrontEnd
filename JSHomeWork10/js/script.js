$(function() {
    $(".drop-down").hover(
        function(el) {
            $(this).children(".submenu").stop().animate({"height":"toggle"}, "medium");
        },
        function() {
            $(this).children(".submenu").stop().animate({"height":"toggle"}, "medium");
        }
    );
});

