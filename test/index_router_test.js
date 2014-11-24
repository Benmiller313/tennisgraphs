var assert = require('assert');
var HashRouter = require('../public/javascripts/hashrouter.js')

describe('Hash Router', function(){
	describe('Create new route', function(){
		it('Empty Router Created', function(){
			var route = new HashRouter();
		});
	});
	describe('#addRoute', function(){
		it('should have a route with name "test" and pattern "test/"', function(){
			var router = new HashRouter();
			router.addRoute(/test\//, function(){return;}, 'test');
			assert.equal(1, router.routes.length);
			assert.equal("test", router.routes[0].name);
			console.log(router.routes)
			assert.equal(toString(/test\//), toString(router.routes[0].pattern));
		});
		it('Routes maintain ordering when new route added', function(){
			var router = new HashRouter();
			router.addRoute(/test\//, function(){return;}, 'test');
			router.addRoute(/test2\//, function(){return;}, 'test2');
			assert.equal(2, router.routes.length);
			assert.equal("test", router.routes[0].name);
			assert.equal("test2", router.routes[1].name);
		})
	});
	describe('#direct', function(){
		it('should match simple string and direct to function', function(){
			var router = new HashRouter();
			router.addRoute(/test123/, function(){return "A-OK";});
			assert.equal('A-OK', router.direct('test123'));
		});
		it('should match regex and pass match to view', function(){
			var router = new HashRouter();
			router.addRoute(/test\/(\w+)/, function(param){return param;});
			assert.equal('good', router.direct('test/good'));
		});

	});
});