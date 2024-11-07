{
    var removeDuplicates = function (param) {
        var UniqueArray = [];
        for (var _i = 0, param_1 = param; _i < param_1.length; _i++) {
            var num = param_1[_i];
            if (!UniqueArray.includes(num)) {
                UniqueArray.push(num);
            }
        }
        return UniqueArray;
    };
    var arrayofNumber = void 0;
    arrayofNumber = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
    console.log(arrayofNumber);
}
