let feet = document.getElementById('feet');
let inches = document.getElementById('inches');
let kg = document.getElementById('kg');
let pounds = document.getElementById('pound');
let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');

let str1 ="";
let str2 ="";
let str3 ="";

document.getElementById('but1').addEventListener('click', function(){
    str1= feet.value *12;
    inches.value = str1;
});
document.getElementById('but2').addEventListener('click', function(){
    str2 = kg.value *2.20462;
    pounds.value = str2;
});
document.getElementById('but3').addEventListener('click', function(){
    str3 = celsius.value * 9/5 + 32;
    fahrenheit.value = str3;
});