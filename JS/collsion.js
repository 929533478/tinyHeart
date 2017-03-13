function momFruitsCollsion(){
	if(!data.gameOver){
		for(var i=0;i<fruit.num;i++){
			if(fruit.alive[i]){
				var l=calLength2(fruit.x[i],fruit.y[i],momFish.x,momFish.y);
				//console.log(l);;
				if(l<900){
					fruit.dead(i);
					data.fruitNum++;
					momFish.bigBodyCount++;
					if(momFish.bigBodyCount>7){
						momFish.bigBodyCount=7;
					}
					if(fruit.fruitStyle[i]=="blue"){
						data._double=2;
					}
					wave.born(fruit.x[i],fruit.y[i]);
				}
			}
		}
	}		
}

function momBabyCollsion(){
	if(data.fruitNum>0&&!data.gameOver){
		var l=calLength2(momFish.x,momFish.y,babyFish.x,babyFish.y);
		if(l<900){
			babyFish.babyBodyCount=0;
			momFish.bigBodyCount=0;
			data.addScore();
			halo.born(babyFish.x,babyFish.y);
		}
	}	
}