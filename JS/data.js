var dataObj=function(){
	this.fruitNum=0;
	this._double=1;
	this.score=0;
	this.gameOver=false;
	this.alpha=0;
	this.scoreAlpha=0;
	this.scoreCount=1;
	this.Excellent=1;
	this.Unbelievable=1;
	this.time=0;
}

dataObj.prototype.draw=function(){
	ctxBefore.save();
	ctxBefore.shadowBlur=10;
	ctxBefore.shadowColor="white";
	ctxBefore.fillStyle="white";
	// ctxBefore.fillText("num:"+this.fruitNum,canWidth*0.5,canHeight-50);
	// ctxBefore.fillText("double:"+this._double,canWidth*0.5,canHeight-80);
	ctxBefore.fillText("SCORE:"+this.score,canWidth*0.5,canHeight-50);
	if(this.gameOver){
		this.time+=deltaTime;
		var _this=this;
		this.alpha+=deltaTime*0.0005;
		ctxBefore.fillStyle="rgba(255,255,255,"+this.alpha+")";
		ctxBefore.fillText("GAMEOVER",canWidth*0.5,canHeight*0.5);
		if(this.time>2000){
			ctxBefore.fillText("点击任意处继续...",canWidth*0.5,canHeight*0.5+50);
			ctxBefore.fillText("最好刷新一下...",canWidth*0.5,canHeight*0.5+100);
			canBefore.addEventListener("click",onclick,false);
		}
		
		
	}
	ctxBefore.restore();
}
dataObj.prototype.addScore=function(){
	this.score+=100*this.fruitNum*this._double;
	this.fruitNum=0;
	this._double=1;	
}
dataObj.prototype.scoreAssessment=function(){
	//console.log(1);

	if(this.score>=2000&&this.score<4000){
		this.getAlpha("Good");
	}
	if(this.score>=4000&&this.score<7000){	
		if(this.Excellent==1){
			this.scoreCount=1;
			this.Excellent=0;
		}
		this.getAlpha("Excellent");
	}
	if(this.score>=7000){
		if(this.Unbelievable==1){
			this.scoreCount=1;
			this.Unbelievable=0;
		}
		this.getAlpha("Unbelievable");
	}
}
dataObj.prototype.getAlpha=function(text){
	if(this.scoreCount==1){
		this.scoreAlpha+=deltaTime*0.0005;
		this.drawAssessment(text);
		if(this.scoreAlpha>=1){
			this.scoreCount=0;
		}
	}else{
		this.scoreAlpha-=deltaTime*0.0005;
		if(this.scoreAlpha>0){
			this.drawAssessment(text);
		}else{
			this.scoreAlpha=0;
		}
	}
}

dataObj.prototype.drawAssessment=function(text){
	ctxBefore.save();
	ctxBefore.shadowBlur=10;
	ctxBefore.shadowColor="yellow";
	ctxBefore.font="40px,rockweel";
	ctxBefore.fillStyle="rgba(0,255,255,"+this.scoreAlpha+")";
	ctxBefore.fillText(text,canWidth*0.5,200);
	ctxBefore.restore();
}

function onclick(){
	data.gameOver=false;
	canBefore.removeEventListener("click",onclick,false);
	game();
	momFish.speed=0.995;//控制不住速度呀~为啥啊？
}