var dustObj=function(){
	this.x=[];
	this.y=[];
	this.dustNO=[];
	this.dustPic=[];
	this.angle=0;
	this.amp=[];
}

dustObj.prototype.num=40;
dustObj.prototype.init=function(){
	for(var i=0;i<7;i++){
		this.dustPic[i]=new Image();
		this.dustPic[i].src="src/dust"+i+".png";
	}
	for(var i=0;i<this.num;i++){
		this.dustNO[i]=0;
		this.amp[i]=Math.random()*15+25;
		this.x[i]=Math.random()*canWidth;
		this.y[i]=Math.random()*canHeight;
		this.dustNO[i]=Math.floor(Math.random()*7);
	}
}
dustObj.prototype.draw=function(){
	this.angle+=deltaTime*0.0008;
	var l=Math.sin(this.angle);
	for(var i=0;i<this.num;i++){
		ctxBefore.drawImage(this.dustPic[this.dustNO[i]],this.x[i]+l*this.amp[i],this.y[i]);
	}
}