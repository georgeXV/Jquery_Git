
function hacerlick(){
	
	var lista=document.querySelectorAll('#principal input');
	for (var i = 0; i<lista.length; i++) {
		lista[i].onclick=mostraralerta;
	}
}
function mostraralerta(){
			alert('Hizo click con for script')
}
window.onload=hacerlick;