define(
    "Controller", 
    ["Model", "View"],
    function() {
        var Controller = function(model, view) {
            var self = this;
            var oldItem;

            view.elements.addBtn.on('click', addItem);
            view.elements.listContainer.on('click', '.item-delete', removeItem);
            view.elements.listContainer.on('click', '.item-edit', editItem);

            function addItem() {
                var newItem = view.elements.input.val();
                model.addItem(newItem);
                view.renderList(model.data);
                view.elements.input.val("");
            }

            function removeItem() {
                var item = $(this).attr("data-value");
                model.removeItem(item);
                view.renderList(model.data);
                view.elements.input.val("");
            }

            function changeItem() {
                var newItem = view.elements.input.val();

                model.changeItem(oldItem, newItem);
                view.renderList(model.data);

                view.elements.input.val("");
                view.elements.changeBtn.off();
                view.elements.changeBtn.hide();
                view.elements.addBtn.show();

            }

            function editItem() {
                view.elements.addBtn.hide();
                view.elements.changeBtn.show();

                oldItem = $(this).attr('data-value');
                view.elements.input.val(oldItem);
                view.elements.changeBtn.on('click', changeItem);
            }
        }

        return Controller;
    }
);