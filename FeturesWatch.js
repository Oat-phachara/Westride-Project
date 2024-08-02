


const myIntervaltime = setInterval(myTimer, 1000);
const myIntervaldate = setInterval(myDate, 1000);

function myTimer() {
    const date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss
    document.getElementById("clock").innerHTML = time
}
function myDate() {
    const date = new Date();
    let day2 = date.toDateString();
    document.getElementById("demo").innerHTML = day2
}

