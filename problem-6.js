var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    var updateProfile = function (myProfile, x) {
        return __assign(__assign({}, myProfile), x);
    };
    var myProfile = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    };
    console.log(updateProfile(myProfile, { age: 26, name: 'nafis' }));
}
