function changeBackgroundColor(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById("color-list")) return false;
	var liEles = document.getElementById("color-list").getElementsByTagName("li");
	for(var i=0;i<liEles.length;i++){
		liEles[i].onclick = function(){
			var bodyEle = document.getElementsByTagName("body")[0];
			addClass(bodyEle,this.className);
		}
	}
}

addToOnload(changeBackgroundColor);