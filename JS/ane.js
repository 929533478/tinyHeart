var aneObj=function(){
	this.x=[];
	this.len=[];
}

aneObj.prototype.num=50;
aneObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.x[i]=i*16+Math.random()*20;
		this.len[i]=200+Math.random()*50;
	}
}

aneObj.prototype.draw=function(){
	ctxAfter.save();
	ctxAfter.globalAlpha=0.6;
	ctxAfter.lineWidth=20;
	ctxAfter.lineCap="round";
	ctxAfter.strokeStyle="#3b1541";
	for(var i=0;i<this.num;i++){
		ctxAfter.beginPath();
		ctxAfter.moveTo(this.x[i],canHeight);
		ctxAfter.lineTo(this.x[i],canHeight-this.len[i]);
		ctxAfter.stroke();
		ctxAfter.closePath();
	}
	ctxAfter.restore();
}