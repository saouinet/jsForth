function Stack(name) {
    var data = [];

    this.pop = function() {
        if (data.length > 0)
            return data.pop();
        else
            throw "Stack empty: " + name;
    };
    
    this.push = function(element) {
        data.push(element);
    };
    
    this.peek = function(offset) {
        var index = data.length - (offset || 1);
        if (0 <= index && index < data.length)
            return data[index];
        else
            throw "Attempted to peek at invalid stack index " + index + ": " + name;
    };
    
    this.length = function() {
        return data.length;
    };
    
    this.clear = function() {
        data.length = 0;
    };
}

module.exports = Stack;