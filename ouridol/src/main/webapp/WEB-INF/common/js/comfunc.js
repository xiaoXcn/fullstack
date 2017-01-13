function addToOnload(func){
	var oldOnload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldOnload();
			func();
		}
	}
}

function addClass(elementName,value){
	if(!elementName.className){
		elementName.className = value;
	}else{
		var oldClassName = elementName.className;
		elementName.className = oldClassName+" "+value;
	}
}

function delClass(elementName,value){
	if(elementName.className){
		elementName.className=elementName.className.replace(value,"");
	}
}