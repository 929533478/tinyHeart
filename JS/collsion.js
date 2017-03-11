function momFruitsCollsion(){
	for(var i=0;i<fruit.num;i++){

		if(fruit.alive[i]){
			var l=calLength2(fruit.x[i],fruit.y[i],momFish.x,momFish.y);
			//console.log(l);;
			if(l<900){
				fruit.dead(i);
			}
		}
	}
}