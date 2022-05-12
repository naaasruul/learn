function tangga(jumAnakTangga){
	for(var i = 0; i < jumAnakTangga; i++){
		var anakTangga = " ";
		
		for(var j = 0; j < jumAnakTangga; j++){
			if(j <= i){
				anakTangga += "#";
			}
			else{
				anakTangga += " ";
			}
		}
		console.log(anakTangga)
	}
}

tangga(6);
