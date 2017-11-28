define(
    "View", 
    ["Model"],
    function() {
        var View = function(model) {
            var self = this;

            function init() {
                // our template for DOM
                var wrapper = $("#wrapper-template").html();

                $("body").append(wrapper);

                self.elements = {
                    input: $(".item-value"),
                    addBtn: $(".item-add"),
                    changeBtn: $(".item-change"),
                    listContainer: $(".item-list")
                };

                self.renderList(model.data);
            };

            self.renderList = function(data) {
                var list = tmpl($("#list-template").html(), { data: data });

                self.elements.listContainer.html(list);
            };

            init();
        }

        return View;
    }
);