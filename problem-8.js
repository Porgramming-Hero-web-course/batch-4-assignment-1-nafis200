{
    var validateKeys = function (T, Y) {
        var x = true;
        for (var i = 0; i < Y.length; i++) {
            if ("".concat(Y[i]) in T) {
            }
            else {
                x = false;
            }
        }
        return x;
    };
    var person = {
        name: 'Alice',
        age: 25,
        email: 'alice@example.com'
    };
    console.log(validateKeys(person, ["name", "age"]));
}
