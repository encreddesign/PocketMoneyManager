function HtmlLoader(){
	if(typeof(window) == 'undefined' || window == null)
		throw 'Window cannot load!';
	if(typeof(document) == 'undefined' || document == null)
		throw 'Document cannot load';
	this.xmlhttp = null;
	this.html = null;
	this.w = window;
	this.d = document;
	this.c = console;
}

HtmlLoader.prototype.initLoader = function(){
	if(this.w.XMLHttpRequest){
		try{
			this.xmlhttp = new XMLHttpRequest();
		}catch(e){}
	}else{
		try{
			this.xmlhttp = new ActiveXObject('Msxml2.XMLHTTP');
		}catch(e){
			try{
				this.xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
			}catch(e){
				throw 'Browser has problem init loader!';
				return false;
			}
		}
	}
	return true;
}

HtmlLoader.prototype.requestHtml = function(uri, async, onloading, onloaded){
	if(typeof(onloading) != 'function')throw 'onloading needs to be a function!';
	onloading.call();
	var xmlhttp = this.xmlhttp;
	var htmldata = null;
	this.xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState == 4 && xmlhttp.status < 400){
			htmldata = xmlhttp.responseText;
		}
	}
	this.xmlhttp.open('GET', uri, async);
	this.xmlhttp.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
	this.xmlhttp.send(null);
	this.html = htmldata;
	if(typeof(onloaded) != 'function')throw 'onloaded needs to be a function!';
	onloaded.call();
}

HtmlLoader.prototype.loadHtml = function(id){
	var ele = null;
	if((ele = this.d.getElementById(id)) != null){
		if(this.html != null){
			ele.innerHTML = this.html;
		}
	}
}