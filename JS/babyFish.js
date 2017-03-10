var babyObj=function(){
	this.x;
	this.y;
	this.angle;
	this.babyEye=new Image();
	this.babyBody=new Image();
	this.babyTail=new Image();
}

babyObj.prototype.init=function(){
	this.angle=0;
	this.x=canWidth*0.5+50;
	this.y=canHeight*0.5-50;
	this.babyEye.src="src/babyEye0.png";
	this.babyBody.src="src/babyFade0.png";
	this.babyTail.src="src/babyTail0.png";
}

babyObj.prototype.draw=function(){
	var detalX=momFish.x-this.x;
	var deltaY=momFish.y-this.y;
	var betal=Math.atan2(deltaY,detalX)+Math.PI;
	this.angle=lerpAngle(betal,this.angle,0.6);

	this.x=lerpDistance(momFish.x,this.x,0.99);
	this.y=lerpDistance(momFish.y,this.y,0.99);
	ctxBefore.save();
	ctxBefore.translate(this.x,this.y);
	ctxBefore.rotate(this.angle);//放在translate下面是为了能使角度随中心点转。
	ctxBefore.drawImage(this.babyTail,-this.babyTail.width*0.5+23,-this.babyTail.height*0.5);
	ctxBefore.drawImage(this.babyBody,-this.babyBody.width*0.5,-this.babyBody.height*0.5);
	ctxBefore.drawImage(this.babyEye,-this.babyEye.width*0.5,-this.babyEye.height*0.5);
	ctxBefore.restore();

}