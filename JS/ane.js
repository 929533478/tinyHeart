var aneObj=function(){
	this.rootx=[];
	this.headx=[];
	this.heady=[];
	this.angle=0;
	this.amp=[];
}

aneObj.prototype.num=50;
aneObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.rootx[i]=i*16+Math.random()*20;
		this.headx[i]=this.rootx[i];
		this.heady[i]=canHeight-250+Math.random()*50;
		this.amp[i]=Math.random()*50+50;
	}
}

aneObj.prototype.draw=function(){
	this.angle+=deltaTime*0.0008;
	var l=Math.sin(this.angle);//[-1,1]
	ctxAfter.save();
	ctxAfter.globalAlpha=0.6;
	ctxAfter.lineWidth=20;
	ctxAfter.lineCap="round";
	ctxAfter.strokeStyle="#3b1541";
	for(var i=0;i<this.num;i++){
		ctxAfter.beginPath();
		ctxAfter.moveTo(this.rootx[i],canHeight);
		this.headx[i]=this.rootx[i]+l*this.amp[i];
		ctxAfter.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i],this.heady[i]);
		ctxAfter.stroke();
		ctxAfter.closePath();
	}
	ctxAfter.restore();
}