
 var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.width =canvas.width + 'px';
canvas.style.height =canvas.height + 'px'; 
document.body.appendChild(canvas);
function resizeWindow() {
	var width = window.innerWidth-40;
	var height = window.innerHeight-40;
	var canvas = getElementsByTagName('canvas');
	canvas.width = width;
	canvas.height = height;
	canvas.style.width = width + 'px';
	canvas.style.height = height + 'px';

}
var bgReady = false;
var bgImage = document.createElement('Image');
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "https://raw.github.com/lostdecade/simple_canvas_game/master/images/background.png";
heroImage.src = "https://raw.github.com/lostdecade/simple_canvas_game/master/images/hero.png"
}
var heroReady = false;
var bgImage = document.createElement('Image');
bgImage.onload = function () {
	heroReady = true;
}
};
function render(){
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
	}
}
if (heroReady){
		ctx.drawImage(heroImage, hero.x, hero.y);
}

if (monsterReady){
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}
}
	var then = Date.now()
	function main(){
		 var now = Date.now()
		 var delta = now - then;
		 update(delta/100);
		 render();
		 then=now;
	}

