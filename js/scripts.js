// calculating area of isosceles triangle using js function

function getTriangleArea(a, h) {
	var triangleArea = a*h/2
    if ((a > 0) && (h > 0)) {
        return triangleArea;
    } else if ((a <= 0) || (h <= 0)) {
    	console.log('Incorrect data!');
	}
}

var triangle1Area = getTriangleArea(10, 6),
    triangle2Area = getTriangleArea(7, -2),
    triangle3Area = getTriangleArea(3, 0);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);


