function setBase(){
	var praone = document.getElementById("praone");
	praone.className = "base";
}

function setWidth(){
	var praone = document.getElementById("praone");
	addClass(praone,"width-300");
}

function clickButton(){
	var butEles = document.getElementsByTagName("input");
	var praone = document.getElementById("praone");
	for(var i=0;i<butEles.length;i++){
		butEles[i].onclick = function(){
			var name = this.name;
			if(name=='base'){
				praone.className = "base";
			}else if(name=='display-none'){
				if(praone.className.indexOf('display-none')>0){
					alert(1);
					delClass(praone,name);
				}else{
					addClass(praone,name);
				}
			}else{
				addClass(praone,name);
			}
		}
	}
}


addToOnload(setBase);
addToOnload(clickButton);