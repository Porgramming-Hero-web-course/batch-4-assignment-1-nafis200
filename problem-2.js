{
    var removeDuplicates = function (param) {
        var UniqueArray = Array.from(new Set(param));
        return UniqueArray;
    };
    var arrayofNumber = void 0;
    arrayofNumber = removeDuplicates([1, 2, 2, 3, 4, 4, 5, 7, 7, 6, 6, 4, 4]);
    console.log(arrayofNumber);
}
