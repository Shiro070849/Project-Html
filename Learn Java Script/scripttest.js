
//แปลงอุณหภูมิจากองศาเซลเซียสเป็นฟาเรนไฮต์ แล้วแปลงจากฟาเรนไฮต์กลับมาเป็นองศาเซลเซียส
function cToF(celsius) {
    var cTemp = celsius;
    var ctoFahr = cTemp * 9 / 5 + 32;
    var message = cTemp + "\xB0C is " + ctoFahr + "\xB0F";
    console.log(message);
}

cToF(30);

function fToC(fahrenheit) {
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var massage = fTemp + "\xB0f is " + fToCel + "\xB0C"
    console.log(massage);
}

fToC(86);