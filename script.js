var img = document.getElementById("letras");
var imgArray = [];

for (i=65; i<91; i++){
	imgArray[i-65] = new Image();
	imgArray[i-65].src = "img/"+i+".gif";
}

document.addEventListener("keydown", keyboard);
document.addEventListener("keyup", reset);

function keyboard(event){
	var kCode = event.keyCode;
	if(kCode>64 && kCode<91){
		img.src = imgArray[kCode-65].src;
	}
}

function reset(){
	img.src = "img/vacio.gif";
}