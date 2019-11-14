var nix = 0;
var summe = 0;
document.getElementById("display").innerHTML = summe;

var multi = [100, 50, 20, 10, 5,1, 1];
var input = document.getElementsByClassName("rIn");
var output = document.getElementsByClassName("outP");
/* for(var i = 0; i<input.length; i++){
    input[i].value = 0;
} */
for(var i = 0; i<output.length; i++){
    output[i].innerHTML = nix;
}
for(var i = 0; i<input.length; i++){
    input[i].addEventListener("change", funktionOne);
}
console.log(output);

function funktionOne(){
    for(var i = 0; i<output.length; i++){
        output[i].innerHTML = input[i].value * multi[i];
    }
    document.getElementById("display").innerHTML = summe;
}