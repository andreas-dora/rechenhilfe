var nix = 11;
var multi = 4;
var tester;

var okF = document.getElementById("okFront");
var okB = document.getElementById("okBack");
// var zButton = document.getElementById("okZ");

var myCard = document.getElementById("cardContent");
// var myTest = document.getElementById("test");
// var back = document.getElementById("backOne");
okF.addEventListener("click", checkF);
okB.addEventListener("click", checkB);
// console.log(checkF);
// var zInfo = okF.style.zIndex;
function checkF(){
  //  console.log(zInfo);


    turnAround();
}

function checkB(){
    alert("PENGO Back");
    turnBack();


}

function turnAround(){
 //   alert("PENGO Turn Around");
 alert("PENGO Front");

     myCard.style.color = "red";
     myCard.style.transform = "rotateY(.5turn)";
 //    back.style.background = "hotpink";
    //  back.style.zIndex = "5";
    //  okB.style.zIndex = "10";


  //  console.log(zInfo);
  //  alert(document.getElementById("okZ").style.zIndex);

     //     transform: rotateY(180deg);

 //   document.getElementById("test").innerHTML = "PENG, peng, peng";
    // myTest.innerHTML = "PENG, peng, peng";
  //  document.getElementById("frontOne").style.background = "red";

}

function turnBack(){
    //   alert("PENGO Turn Around");
        myCard.style.background = "green";
    myCard.style.transform = "rotateY(0deg)";
   
        //     transform: rotateY(180deg);
   
    //   document.getElementById("test").innerHTML = "PENG, peng, peng";
  //     myTest.innerHTML = "PENG, peng, peng";
     //  document.getElementById("frontOne").style.background = "red";
   
   }