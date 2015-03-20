
var orbitalLoading=false;
var nucleas=new Image();
var imageLoad=false;
var animationSet=false;
var angleIncrease=0.06;
var orbitNumber=1;
var orbitalCounter=0;
var lastOrbit=1;
var nucleas=new Image();
var imageLoad=false;
var animationSet=false;
var angleIncrease=0.09;
var pbutton=document.getElementById("pbutton");
pbutton.addEventListener("click",protonconfiguration);
var nbutton=document.getElementById("nbutton");
nbutton.addEventListener("click",neutronconfiguration);
var ebutton=document.getElementById("ebutton");
ebutton.addEventListener("click",electronconfiguration);
document.getElementById("submit").addEventListener("click", elementConfiguration, false );



		canvas=document.getElementById("canvas");
		context=canvas.getContext("2d");	



function elementConfiguration()
{
 var electrons=parseInt(document.getElementById("electron").value);
 var protons=parseInt(document.getElementById("proton").value);
 var neutrons=parseInt(document.getElementById("neutron").value);
 var result=document.getElementById("Result");
 if(electrons===protons)
 {
 	for(i in json)
 	{ 
 	if(json[i].Protons===electrons)
 	{
 	if(json[i].neutrons===neutrons)
 	{
 		var config = "";
 		for(j=0;j<json[i]["element configuration"].length;j++){
 			for(k=0;k<json[i]["element configuration"][j].length;k++){
 				if(k===1){
 				config +="<sup>"+json[i]["element configuration"][j][k]+"</sup>";
 			}
 			else{
 				config +=json[i]["element configuration"][j][k];
 				}
 				} 			
 			}
 		
 	result.innerHTML='<div id="elementname">'+json[i].name+" "+"["+json[i].symbol+"] -"+" "+config+'</div>';
 	break;
 	}
 	else{
	result.innerHTML='<div id="alert">'+"This is not a Stable Element"+'</div>'; 	
	break;
 		}
 	}
 	
 	}
 	
 	}
 else
 {
	result.innerHTML='<div id="alert">'+"This is not a Stable Element"+'</div>';
 	}
}

function  resultConfiguration(orbitalCounter)
{
 var result=document.getElementById("Result");

 		var config = "";
 		for(j=0;j<=orbitalCounter;j++){                                                                                                                                
 			for(k=0;k<configurationArray[j].length;k++){
 				if(k===1){
 				config +="<sup>"+configurationArray[j][k]+"</sup>";
 			}
 			else{
 				config +=configurationArray[j][k];
 				}
 				} 			
 			}
 		
 	result.innerHTML='<div id="elementname">'+config+'</div>';

}

function electronconfiguration(){
	var electrons = parseInt(document.getElementById("electron").value);
	mainObject.electrons=electrons;
	setAtomType();
	orbitalLoading=true;
	orbitNumber=1;
	electronResult(electrons);
	orbitalCounter=0;
   lastOrbit=1;
	if (!animationSet) {
		animationSet=true;
		window.requestAnimationFrame(drawCanvas);
	}
	
}

function setAtomType() {
		if (mainObject.electrons>mainObject.protons) {
	mainObject.ion="-Ion";
}
	else if(mainObject.electrons<mainObject.protons){
	mainObject.ion="+Ion";
}
	else if (mainObject.electrons==mainObject.protons) {
	mainObject.ion="Neutral Atom";
}
}
function protonconfiguration()

{ 
   var protons=parseInt(document.getElementById("proton").value);
	mainObject.protons=protons;
	setAtomType();
	setName(protons);
	if (!animationSet) {
		animationSet=true;
		window.requestAnimationFrame(drawCanvas);
	}
}

function setName(protons) {
	for(i in json) {
		if (json[i].Protons===parseInt(protons)) {
			mainObject.name=json[i].name;
			break;
		}
		}
	}
function neutronconfiguration()
{
	var neutrons=parseInt(document.getElementById("neutron").value);
	mainObject.neutrons=neutrons;
	if (!animationSet) {
		animationSet=true;
		window.requestAnimationFrame(drawCanvas);
	}
	
	}
	function getOrbitalConfiguration(orbitalCounter) {
	var Result = new Array();
	Result[0]=orbitalCounter;
	     	
     	for(i=0;i<orbitalCounter;i++){
     		if(Result[parseInt(configurationArray[i][0][0])]!=undefined)
     		{
     		Result[parseInt(configurationArray[i][0][0])]+=configurationArray[i][1];
     	}
     	else {
     		Result[parseInt(configurationArray[i][0][0])]=0;
     		Result[parseInt(configurationArray[i][0][0])]=configurationArray[i][1];
     	}
    }
 	return Result;
 }
