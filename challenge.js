/* for (let i = 1; i <= 100; i++) {
    let value = ""
    if (i % 3 == 0) {
        value += "fizz"
    }
    if (i % 5 == 0) {
        value += "Buzz"
    }
    console.log(value || i);
}
*/

/*
let x = 1
while (x <= 100) {

    console.log(x);
    x++
}

// ----------------vs---------------------

let x = 1
while (x <= 100) {
    x++
    console.log(x);

} */

let x = 1
while (x <= 100) {

    let string = ""

    if (x % 3 == 0) {
        string += "Fizz"
    }
    if (x % 5 == 0) {
        string += "Buzz"
    }
    console.log(string || x);
    x++

}
