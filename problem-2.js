{
    var removeDuplicates = function (param) {
        var UniqueArray = [];
        for (var i = 0; i < param.length; i++) {
            if (!UniqueArray.includes(param[i])) {
                UniqueArray.push(param[i]);
            }
        }
        return UniqueArray;
    };
    var arrayofNumber = void 0;
    arrayofNumber = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
    console.log(arrayofNumber);
}
