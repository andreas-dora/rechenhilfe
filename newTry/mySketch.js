const nix = 0;
const multi = [100, 50, 20, 10, 5,1, 1];
var summe = 0;
var input = document.getElementsByClassName("rIn");
var inVal = new Array;
var output = document.getElementsByClassName("outP");
var summeOut = document.getElementById("display");
var res = document.getElementById("rButton");
summeOut.innerHTML = summe.toFixed(2);

for(var i = 0; i<output.length; i++){
    output[i].innerHTML = nix.toFixed(2);
}
for(var i = 0; i<input.length; i++){
    input[i].addEventListener("change", funktionOne);
}
res.addEventListener("click", resetto);

function funktionOne(){
    for(var i = 0; i<input.length; i++){
        inVal[i] = input[i].value * multi[i];
        output[i].innerHTML = inVal[i].toFixed(2);
    }
    summe = inVal.reduce(getSumme);
    summeOut.innerHTML = summe.toFixed(2);
}

function getSumme(total, num){
    return total + num;
}

function resetto(){
    document.getElementById("myRechner").reset();
    summe = 0;
    for(var i = 0; i<output.length; i++){
        output[i].innerHTML = nix.toFixed(2);
    }
    summeOut.innerHTML = nix.toFixed(2);
}