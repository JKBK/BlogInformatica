console.log("Cargando...");

window.onload = function() {
	console.log("Cargado!");
	if (!localStorage){
        console.log("nope");
    }else{
        console.log("works");
    }
}