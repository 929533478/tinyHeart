var babyObj=function(){
	this.x;
	this.y;
	this.angle;
	//this.babyEye=new Image();
	//this.babyBody=new Image();
	//this.babyTail=new Image();
	this.babyEye=[];
	this.babyBody=[];
	this.babyTail=[];

	this.babyTailTimer=0;
	this.babyTailCount=0;

	this.babyEyeTimer=0;
	this.babyEyeCount=0;
	this.babyEyeInterval=1000;

	this.babyBodyCount=0;
	this.babyBodyTimer=0;
}

babyObj.prototype.init=function(){
	this.angle=0;
	this.x=canWidth*0.5+50;
	this.y=canHeight*0.5-50;
	//this.babyEye.src="src/babyEye0.png";
	this.babyBody.src="src/babyFade0.png";
	//this.babyTail.src="src/babyTail0.png";

	for(var i=0;i<8;i++){
		this.babyTail[i]=new Image();
		this.babyTail[i].src="src/babyTail"+i+".png";
	}
	for(var i=0;i<2;i++){
		this.babyEye[i]=new Image();
		this.babyEye[i].src="src/babyEye"+i+".png";
	}
	for(var i=0;i<20;i++){
		this.babyBody[i]=new Image();
		this.babyBody[i].src="src/babyFade"+i+".png";
	}
}

babyObj.prototype.draw=function(){
	this.babyTailTimer+=deltaTime;
	if(this.babyTailTimer>50){
		this.babyTailCount=(this.babyTailCount+1)%8;
		this.babyTailTimer%=50;
	}

	this.babyEyeTimer+=deltaTime;
	if(this.babyEyeTimer>this.babyEyeInterval){
		this.babyEyeCount=(this.babyEyeCount+1)%2;
		this.babyEyeTimer%=this.babyEyeInterval;

		if(this.babyEyeCount==0){
			this.babyEyeInterval+=Math.random()*1500+1500;
		}else{
			this.babyEyeInterval=200;
		}
	}
	
	this.babyBodyTimer+=deltaTime;
	if(this.babyBodyTimer>200){
		this.babyBodyCount=this.babyBodyCount+1;
		this.babyBodyTimer%=200;
		if(this.babyBodyCount>19){
			this.babyBodyCount=19;
			data.gameOver=true;
		}
	}

	var detalX=momFish.x-this.x;
	var deltaY=momFish.y-this.y;
	var betal=Math.atan2(deltaY,detalX)+Math.PI;
	this.angle=lerpAngle(betal,this.angle,0.6);

	this.x=lerpDistance(momFish.x,this.x,0.99);
	this.y=lerpDistance(momFish.y,this.y,0.99);
	ctxBefore.save();
	ctxBefore.translate(this.x,this.y);
	ctxBefore.rotate(this.angle);//放在translate下面是为了能使角度随中心点转。
	ctxBefore.drawImage(this.babyTail[this.babyTailCount],-this.babyTail[this.babyTailCount].width*0.5+23,-this.babyTail[this.babyTailCount].height*0.5);
	ctxBefore.drawImage(this.babyBody[this.babyBodyCount],-this.babyBody[this.babyBodyCount].width*0.5,-this.babyBody[this.babyBodyCount].height*0.5);
	ctxBefore.drawImage(this.babyEye[this.babyEyeCount],-this.babyEye[this.babyEyeCount].width*0.5,-this.babyEye[this.babyEyeCount].height*0.5);
	ctxBefore.restore();

}