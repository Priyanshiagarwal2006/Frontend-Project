document.getElementById("img").src="of.jpg";
document.getElementById("text").innerHTML="off";
document.getElementById("off").style.backgroundColor ="yellow";
document.getElementById("off").style.Color ="white";

function btnon(){
    document.getElementById("img").src="on.jpg";
    document.getElementById("text").innerHTML="on";
    document.getElementById("on").style.backgroundColor ="yellow";
    document.getElementById("on").style.Color ="white";
    document.getElementById("off").style.backgroundColor ="white";
    document.getElementById("off").style.Color ="black";

}

function btnoff(){
    document.getElementById("img").src="of.jpg";
    document.getElementById("text").innerHTML="off";
    document.getElementById("off").style.backgroundColor ="yellow";
    document.getElementById("off").style.Color ="white";
    document.getElementById("on").style.backgroundColor ="white";
    document.getElementById("on").style.Color ="black";

}