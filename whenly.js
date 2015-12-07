var Whenly = (function(){
	var w = {},
		digestList = [];
	
	w.digest = function(object){
		digestList.push(object);
	}

	w.init = function(){
		setInterval(function(){
			for(var i=0; i<digestList.length; i++){

				var whenObj = digestList[i];

				var currentVal = whenObj.that[whenObj.varname];
				
				if(currentVal != whenObj.val){
					whenObj.clean = false;
				}else{
					whenObj.clean = true;
				}

				whenObj.val = currentVal;

				if(!whenObj.clean && (whenObj.val == whenObj.expectedVal)){
					whenObj.cb();
				}
			}
		}.bind(this), 1000/60);
	}

	w.when = function(that, varname) {
		return new this.When(varname, that);
	}
	
	w.When = function(varname, that) {
		this.varname = varname;
		this.val = null;
		this.expectedVal = {};
		this.cb = function(){}
		this.that = that;
		this.clean = true;
		return this;
	}

	w.When.prototype.is = function(expectedVal, cb){
		this.expectedVal = expectedVal;
		this.cb = cb;
		w.digest(this);
	}

	return w;

}());
