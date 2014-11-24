
var Route = function(pattern, view, name){
	this.name = name;
	this.pattern = pattern;
	this.view = view;
}


var HashRouter = function(){
	this.routes = [];
}

HashRouter.prototype.addRoute = function(pattern, view, name) {
	this.routes.append(new Route(pattern, name, view));
};

HashRouter.prototype.direct = function(url_hash) {

};



module.exports = HashRouter;