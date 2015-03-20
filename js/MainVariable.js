var mainObject = {
	"protons":0,
	"neutrons":0,
	"electron":0,
	"name":"",
	"ion":""
	}
	var electronImage= new Image();
 	electronImage.src="images/electron.png";
 	var configurationArray = [];

function getConfiguration(electrons) {

var Result = new Array();
Result[0]=electrons;

 	for(i in json)
 	{ 

     if(json[i].Protons===electrons){
     	var configArray=json[i]["element configuration"];
     	for(i=0;i<configArray.length;i++){
     		if(Result[parseInt(configArray[i][0][0])]!=undefined)
     		{
     		Result[parseInt(configArray[i][0][0])]+=configArray[i][1];
     	}
     	else {
     		Result[parseInt(configArray[i][0][0])]=0;
     		Result[parseInt(configArray[i][0][0])]=configArray[i][1];
     	}
     	

}


 	break;
 	}
 	
 	}
 	
 	return Result;
 }



function drawCanvas(){
	
	if (animationSet) {
		context.clearRect(0,0,canvas.width,canvas.height);
		Result=getConfiguration(mainObject.electrons);
		
		if (!orbitalLoading) {
				
	
	
 	orbits=Result.length-1;
	
	context.clearRect(0,0,canvas.width,canvas.height);
	Result=getConfiguration(mainObject.electrons);

 	
 	
 	orbits=Result.length-1;
 	context.clearRect(0,0,canvas.width,canvas.height);
 	radius=80;
 	for (i=0;i<orbits;i++,radius+=30) {
 		context.beginPath();
      context.arc(canvas.width/2,canvas.height/2,radius,0,2*Math.PI);
      context.stroke();
      for (j=0;j<Result[i+1];j++,angle+=angleBreakdown) {
      if (j==0) {
      angleBreakdown=360/Result[i+1];
      angle=angleBreakdown+(angleIncrease/(i+1)); 

      }
      pointX=(canvas.width/2)+ (radius*Math.cos(angle* Math.PI/180));
      pointY=(canvas.height/2)+ (radius*Math.sin(angle* Math.PI/180));
      context.drawImage(electronImage,pointX-15,pointY-15,30,30);
      
   }
}
angleIncrease+=0.8;

}
else {
	
	if (orbitNumber==1) {	
	lastOrbit=orbits=orbitNumber;
}

if(orbitNumber%100==0){
	var orbitValue=configurationArray[orbitalCounter];
   if( lastOrbit < parseInt(orbitValue[0][0])){
   	orbits = lastOrbit = parseInt(orbitValue[0][0]);
   }
   else if (lastOrbit >= parseInt(orbitValue[0][0])) {
   	orbits=lastOrbit;
   }
   resultConfiguration(orbitalCounter)
   orbitalCounter++;
}
   Resulta=getOrbitalConfiguration(orbitalCounter);
 	orbitNumber++;
 	radius=80;
 	for (i=0;i<orbits;i++,radius+=30) {
 		context.beginPath();
      context.arc(canvas.width/2,canvas.height/2,radius,0,2*Math.PI);
      
      context.stroke();
      for (j=0;j<Resulta[i+1];j++,angle+=angleBreakdown) {
      if (j==0) {
      angleBreakdown=360/Resulta[i+1];
      angle=angleBreakdown+angleIncrease; 
      }
      pointX=(canvas.width/2)+ (radius*Math.cos(angle* Math.PI/180));
      pointY=(canvas.height/2)+ (radius*Math.sin(angle* Math.PI/180));
      context.drawImage(electronImage,pointX-15,pointY-15,30,30);
      }
}

if (orbitalCounter==configurationArray.length) {
	orbitalLoading=false;
}
	
}



      context.beginPath();
      context.arc(canvas.width/2,canvas.height/2,50,0,2*Math.PI);
      context.strokeStyle = '#000000';
      context.stroke();
      context.fillStyle = '#e1f318';
      context.fill();
     
      context.beginPath();
      context.arc((canvas.width/2)-0,(canvas.height/2)-17,26, 0, 2 * Math.PI); 
      context.fillStyle='#d54532';
      context.fill();
      
      
      context.beginPath();
      context.arc((canvas.width/2)-0,(canvas.height/2)+27,26, 0, 2 * Math.PI); 
      context.fillStyle='#5498de';
      context.fill();
     
          
      context.fillStyle = '#ffffff';	
      context.font = "15pt Calibri";
      context.fillText("P: "+mainObject.protons,(canvas.width/2)-20,(canvas.height/2)-10);
      context.fillText("N: "+mainObject.neutrons,(canvas.width/2)-20,(canvas.height/2)+35);
      
      context.fillStyle = '#000000';
		context.font = "20pt opensans";
		context.fillText(mainObject.ion,490,45);
		
		context.fillStyle = '#000000';
		context.font = "20pt Calibri";
		context.fillText(mainObject.name,50,45);
		      
      
      
   }
   
   window.requestAnimationFrame(drawCanvas);
      
 }

function electronResult(electrons) {
	
	configurationArray = [];
	 	for(i in json)
 	{ 

     if(json[i].Protons===electrons){
     	configurationArray=json[i]["element configuration"];

 	break;
 	}
 	
 	}
 }

