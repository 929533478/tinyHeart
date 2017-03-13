var haloObj=function(){
	this.x=[];
	this.y=[];
	this.alive=[];
	this.r=[];
}
haloObj.prototype.num=5;
haloObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.alive[i]=false;
		this.r[i]=0;
	}
}
haloObj.prototype.draw=function(){
	ctxBefore.save();
	ctxBefore.lineWidth=2;
	ctxBefore.shadowBlur=10;
	ctxBefore.shadowColor="rgba(134,45,145,1)";
	for(var i=0;i<this.num;i++){
		if(this.alive[i]){
			this.r[i]+=deltaTime*0.1;
			if(this.r[i]>100){
				this.alive[i]=false;
				break;
			}
			var alpha=1-this.r[i]/100;
			ctxBefore.beginPath();
			ctxBefore.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
			ctxBefore.strokeStyle="rgba(134,45,145,"+alpha+")";
			ctxBefore.stroke();
			ctxBefore.closePath();
		}
	}
	ctxBefore.restore();
}
haloObj.prototype.born=function(x,y){
	for(var i=0;i<this.num;i++){
		if(!this.alive[i]){
			this.x[i]=x;
			this.y[i]=y;
			this.r[i]=20;
			this.alive[i]=true;
			return;
		}
	}
}