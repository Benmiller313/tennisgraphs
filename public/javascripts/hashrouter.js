
var Route = function(pattern, view, name){
	this.name = name;
	this.pattern = pattern;
	this.view = view;
}


var HashRouter = function(){
	this.routes = [];
}

HashRouter.prototype.addRoute = function(pattern, view, name) {
	this.routes.push(new Route(pattern, view, name));
};

HashRouter.prototype.direct = function(hash_path) {
	for (var i = 0; i < this.routes.length; i++) {
		matching = hash_path.match(this.routes[i].pattern);
		if (matching!=null){
			matching.shift();
			return this.routes[i].view.apply(null, matching);
		}
	}
};



module.exports = HashRouter;