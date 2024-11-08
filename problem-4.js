{
    var calculateShapeArea = function (param) {
        if (param.shape === 'circle') {
            return parseFloat((Math.PI * param.radius * param.radius).toFixed(2));
        }
        else if (param.shape === 'rectangle') {
            return param.height * param.width;
        }
        else {
            return 0;
        }
    };
    var circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    var rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(circleArea);
    console.log(rectangleArea);
}
