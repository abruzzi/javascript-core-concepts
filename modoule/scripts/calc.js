define({
    add: function(a, b) {
        return a + b;
    }
});

define(['math'], function(math) {
    return {
        add: function(a, b) {
            return a + b;
        },
        sin: function(a) {
            return math.sin(a);
        }
    }
});
