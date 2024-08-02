console.log("--------------------- Q1 ------------------------");
function addition(x, y) {
    return (x + y);
}
console.log(addition(3, 2))
console.log(addition(-3, -6))
console.log(addition(7, 3))

console.log("--------------------- Q2 ------------------------");
function convert(time) {
    if (time < 0) {
        return ("ไม่มีเวลา");
    } else { return (time * 60); }
}
console.log(convert(5))
console.log(convert(3))
console.log(convert(2))

console.log("--------------------- Q3 ------------------------");
function findPerimeter(l, w) {
    return (2 * (l + w));
}
console.log(findPerimeter(6, 7))
console.log(findPerimeter(20, 10))
console.log(findPerimeter(2, 9))

console.log("--------------------- Q4 ------------------------");
function checkDivide(a, b) {
    if (a % b == 0) {
        return (true);
    } else {
        return (false);
    }
}
console.log(checkDivide(5, 1))
console.log(checkDivide(6, 3))
console.log(checkDivide(10, 3))

console.log("--------------------- Q5 ------------------------");
function calcAge(age) {
    return (age * 365)
}
console.log(calcAge(65))
console.log(calcAge(0))
console.log(calcAge(20))

console.log("--------------------- Q6 ------------------------");
function footballPoints(wins, draws, losses) {
    let result = (wins * 3 + draws + losses * 0);
    return (result);
}
console.log(footballPoints(3, 4, 2))
console.log(footballPoints(5, 0, 2))
console.log(footballPoints(0, 0, 1))