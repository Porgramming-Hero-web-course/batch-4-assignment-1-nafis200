var sumArray = function (param) {
    var sum = 0;
    for (var i = 0; i < param.length; i++) {
        sum = sum + param[i];
    }
    return sum;
};
var SumofNumber = 0;
SumofNumber = sumArray([1, 2, 3, 4, 5]);
console.log(SumofNumber);
