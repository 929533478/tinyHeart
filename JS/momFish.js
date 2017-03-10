var momObj=function(){
	this.x;
	this.y;
	this.bigEye=new Image();
	this.bigBody=new Image();
	this.bigTail=new Image();
	this.angle;
}


momObj.prototype.init=function(){
	this.x=canWidth/2;
	this.y=canHeight/2;
	this.bigEye.src="src/bigEye0.png";
	this.bigBody.src="src/bigSwim0.png";
	this.bigTail.src="src/bigTail0.png";
	this.angle=0;
}

momObj.prototype.draw=function(){
	var deltaX=mx-this.x;
	var deltaY=my-this.y;
	var betal=Math.atan2(deltaY,deltaX)+Math.PI;
	this.angle=lerpAngle(betal,this.angle,0.6);

	this.x=lerpDistance(mx,this.x,0.99);
	this.y=lerpDistance(my,this.y,0.99);
	ctxBefore.save();
	ctxBefore.translate(this.x,this.y);
	ctxBefore.rotate(this.angle)
	ctxBefore.drawImage(this.bigEye,-this.bigEye.width*0.5,-this.bigEye.height*0.5);
	ctxBefore.drawImage(this.bigBody,-this.bigBody.width*0.5,-this.bigBody.height*0.5);
	ctxBefore.drawImage(this.bigTail,-this.bigTail.width*0.5+30,-this.bigTail.height*0.5);
	ctxBefore.restore();
}