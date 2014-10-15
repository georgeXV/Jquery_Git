var actual =1;

$(document).on("ready", main);

function main(){
	var intervalo = setInterval("runSlider()",3000);
}

function runSlider(){
	if (actual == $('#containerSlider img').size()) {
			actual = 0;
	}

	$('#containerSlider').animate({
		marginLeft: (actual*-1*$("#containerSlider img").eq(0).width())
	},1000);

	actual++;
	console.log(actual*-1*$("#containerSlider img").eq(0).width());
}