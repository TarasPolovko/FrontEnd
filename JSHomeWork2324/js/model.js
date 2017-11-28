define(
    "Model", [],
    function() {
        var Model = function(data) {

            var self = this;

            self.data = data;

            self.addItem = function(item) {
                if (item.length === 0) {
                    return;
                }

                self.data.push(item);

                return self.data;
            }

            self.removeItem = function(item) {
                var index = self.data.indexOf(item);
                console.log(index);

                if (index === -1) {
                    return;
                }

                self.data.splice(index, 1);

                return self.data;
            }

            self.changeItem = function(oldItem, newItem) {
                if ((newItem.length === 0) || (oldItem === newItem)) {
                    return;
                }

                var index = self.data.indexOf(oldItem);

                if (index === -1) {
                    return;
                }

                self.data[index] = newItem;

                return self.data;
            }
        }

        return Model;
    }
);