var utils = {
    object: {
        pow: function(a, b) {
            return Math.pow(a, b);
        },
        sum: function(a, b) {
            return a + b;
        }
    },
    newFunc: function(a, b) {
        return a - b;

    }
}

try {
    module.exports = utils;
} catch (e) {}
