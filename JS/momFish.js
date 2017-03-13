var momObj=function(){
	this.speed=0.99;
	this.x;
	this.y;
	//this.bigEye=new Image();
	//this.bigBody=new Image();
	//this.bigTail=new Image();
	this.bigTail=[];
	this.bigEye=[];
	this.bigOrgBody=[];
	this.bigBlueBody=[];
	this.angle;

	this.bigTailCount=0;
	this.bigTailTimer=0;

	this.bigEyeTimer=0;
	this.bigEyeInterval=1000;
	this.bigEyeCount=0;

	this.bigBodyCount=0;
}


momObj.prototype.init=function(){
	this.x=canWidth/2;
	this.y=canHeight/2;
	//this.bigEye.src="src/bigEye0.png";
	//this.bigBody.src="src/bigSwim0.png";
	//this.bigTail.src="src/bigTail0.png";
	this.angle=0;

	for(var i=0;i<8;i++){
		this.bigTail[i]=new Image();
		this.bigTail[i].src="src/bigTail"+i+".png";
	}

	for(var i=0;i<2;i++){
		this.bigEye[i]=new Image();
		this.bigEye[i].src="src/bigEye"+i+".png";
	}

	for(var i=0;i<8;i++){
		this.bigBlueBody[i]=new Image();
		this.bigBlueBody[i].src="src/bigSwimBlue"+i+".png";
		this.bigOrgBody[i]=new Image();
		this.bigOrgBody[i].src="src/bigSwim"+i+".png";
	}
}

momObj.prototype.draw=function(){
	this.bigTailTimer+=deltaTime;
	if(this.bigTailTimer>50){
		this.bigTailCount=(this.bigTailCount+1)%8;
		this.bigTailTimer%=50;
	}

	this.bigEyeTimer+=deltaTime;
	if(this.bigEyeTimer>this.bigEyeInterval){
		this.bigEyeCount=(this.bigEyeCount+1)%2;
		this.bigEyeTimer%=this.bigEyeInterval;
		if(this.bigEyeCount==0){
			this.bigEyeInterval+=Math.random()*1500+1500;
		}else{
			this.bigEyeInterval=200;
		}
	}

	var deltaX=mx-this.x;
	var deltaY=my-this.y;
	var betal=Math.atan2(deltaY,deltaX)+Math.PI;
	this.angle=lerpAngle(betal,this.angle,0.6);

	this.x=lerpDistance(mx,this.x,this.speed);
	this.y=lerpDistance(my,this.y,this.speed);
	ctxBefore.save();
	ctxBefore.translate(this.x,this.y);
	ctxBefore.rotate(this.angle)
	ctxBefore.drawImage(this.bigTail[this.bigTailCount],-this.bigTail[this.bigTailCount].width*0.5+30,-this.bigTail[this.bigTailCount].height*0.5);
	if(data._double==2){
		ctxBefore.drawImage(this.bigBlueBody[this.bigBodyCount],-this.bigBlueBody[this.bigBodyCount].width*0.5,-this.bigBlueBody[this.bigBodyCount].height*0.5);
	}else{
		ctxBefore.drawImage(this.bigOrgBody[this.bigBodyCount],-this.bigOrgBody[this.bigBodyCount].width*0.5,-this.bigOrgBody[this.bigBodyCount].height*0.5);
	}

	ctxBefore.drawImage(this.bigEye[this.bigEyeCount],-this.bigEye[this.bigEyeCount].width*0.5,-this.bigEye[this.bigEyeCount].height*0.5);
	ctxBefore.restore();
}