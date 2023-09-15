let myP = document.getElementById('show1')
let myU = document.getElementById('show2')

function percentage () {
    let no1 = Number(document.getElementById('num1').value)
    let no2 = Number(document.getElementById('num2').value)
    myP.innerHTML = (no2/100) * no1;
    myU.innerHTML = no1 + ((no2/100) * no1);
}