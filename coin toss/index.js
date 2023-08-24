var randomNumber=Math.floor(Math.random()*2)+1;

var tossCoin="coin"+randomNumber+".png";

var Cointoss="images/"+tossCoin;

var image1=document.querySelector("img");

image1.setAttribute("src",Cointoss);


if(randomNumber==1){
    document.querySelector("h1").innerHTML="HEADS!";
}
else{
    document.querySelector("h1").innerHTML="TAILS!";
}