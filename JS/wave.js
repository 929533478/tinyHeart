var waveObj=function(){
	this.x=[];
	this.y=[];
	this.alive=[];
	this.r=[];
}

waveObj.prototype.num=10;
waveObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.alive[i]=false;
		this.r[i]=0;
	}
}

waveObj.prototype.draw=function(){
	ctxBefore.save();
	ctxBefore.lineWidth=2;
	ctxBefore.shadowBlur=10;
	ctxBefore.shadowColor="white";
	for(var i=0;i<this.num;i++){
		if(this.alive[i]){
			this.r[i]+=deltaTime*0.03;
			if(this.r[i]>40){
				this.alive[i]=false;
				break;//避免出现alpha为负值；
			}
			var alpha=1-this.r[i]/40;
			ctxBefore.beginPath();
			ctxBefore.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
			ctxBefore.strokeStyle="rgba(255,255,255,"+alpha+")"
			ctxBefore.stroke();
			ctxBefore.closePath();
		}
	}
	ctxBefore.restore();
}

waveObj.prototype.born=function(x,y){
	for(var i=0;i<this.num;i++){
		if(!this.alive[i]){
			this.alive[i]=true;
			this.r[i]=20;
			this.x[i]=x;
			this.y[i]=y;
			return;
		}
	}
}