var canBefore,canAfter;
var ctxBefore,ctxAfter;

var deltaTime,lastTime;

var bgPic=new Image();

var canWidth,canHeight;

var ane;
var fruit;
var momFish;
var babyFish;
var dust;

var data;
var wave;
var halo;

var mx,my;//获取鼠标位置；

function game(){
	init();
	//console.log(canHeight);
	lastTime=Date.now();
	deltaTime=0;
	gameLoop();

}

function init(){
	canBefore=document.getElementById('canvasBefore');//fish,dust,UI,circle
	ctxBefore=canBefore.getContext('2d');

	canAfter=document.getElementById('canvasAfter');//background,ane,fruits
	ctxAfter=canAfter.getContext('2d');

	ctxBefore.textAlign="center";
	ctxBefore.font="20px Verdana";

	bgPic.src="src/background.jpg";

	canBefore.addEventListener('mousemove',onMousemove,false);

	canWidth=canAfter.width;
	canHeight=canAfter.height;

	ane=new aneObj();
	ane.init();

	fruit=new fruitObj();
	fruit.init();

	momFish=new momObj();
	momFish.init();

	babyFish=new babyObj();
	babyFish.init();

	data=new dataObj();

	wave=new waveObj();
	wave.init();

	halo=new haloObj();
	halo.init();

	dust=new dustObj();
	dust.init();

	mx=canWidth/2;
	my=canHeight/2;//不能放在鼠标事件的前面。
}

function gameLoop(){
	window.requestAnimationFrame(gameLoop);

	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	if(deltaTime>40) deltaTime=40;//限定每帧之间的时间间隔，如果没有，果实可能会非常大。
	//console.log(deltaTime);
	//
	drawBackground();
	ane.draw();
	fruitMoniter();
	fruit.draw();

	ctxBefore.clearRect(0,0,canWidth,canWidth);
	momFish.draw();
	babyFish.draw();

	momFruitsCollsion();
	momBabyCollsion();

	data.draw();
	data.scoreAssessment();

	wave.draw();
	halo.draw();

	dust.draw();
}

function onMousemove(e){
	if(!data.gameOver){
		if(e.offSetX||e.layerX){
		mx=e.offSetX==undefined?e.layerX:e.offSetX;
		my=e.offSetY==undefined?e.layerY:e.offSetY;
		//console.log(mx);
		}
	}
}