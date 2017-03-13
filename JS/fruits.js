var fruitObj=function(){
	this.alive=[];
	this.x=[];
	this.y=[];
	this.l=[];
	this.speed=[];
	this.fruitStyle=[];
	this.aneNO=[];
	this.orange=new Image();
	this.blue=new Image();
}

fruitObj.prototype.num=20;

fruitObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.alive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
		this.speed[i]=Math.random()*0.01+0.005;
		this.aneNO[i]=0;
		//this.born(i);
		
	}
	this.orange.src="src/fruit.png";
	this.blue.src="src/blue.png";

}
fruitObj.prototype.dead=function(i){
	this.alive[i]=false;
}

fruitObj.prototype.draw=function(){
	for(var i=0;i<this.num;i++){
		if(this.alive[i]){
			if(this.fruitStyle[i]=="orange"){
				var pic=this.orange;
			}else{
				var pic=this.blue;
			}
			if(this.l[i]<=14){
				var _this=this;
				this.x[i]=ane.headx[_this.aneNO[i]];
				this.y[i]=ane.heady[_this.aneNO[i]];
				this.l[i]+=this.speed[i]*deltaTime;
				//sconsole.log(deltaTime);
			}else{
				this.y[i]-=this.speed[i]*7*deltaTime;
			}
			ctxAfter.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
			if(this.y[i]<-10){
				this.alive[i]=false;
			}
		}
	}
}

fruitObj.prototype.born=function(i){
	this.aneNO[i]=Math.floor(Math.random()*ane.num);
	//console.log(canHeight-ane.len[aneID]);
	this.l[i]=0;
	this.alive[i]=true;
	var ran=Math.random();
	if(ran>0.2){
		this.fruitStyle[i]="orange";
	}else{
		this.fruitStyle[i]="blue";
	}
}

function fruitMoniter(){
	var num=0;
	for(var i=0;i<fruit.num;i++){
		if(fruit.alive[i]){
			num++;
		}
		if(num<15){
			sendFruit();
			return;
		}
	}
}
function sendFruit(){
	for(var i=0;i<fruit.num;i++){
		if(!fruit.alive[i]){
			fruit.born(i);
			return;
		}
	}
}