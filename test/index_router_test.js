var assert = require('assert');
var HashRouter = require('../public/javascripts/hashrouter.js')

describe('Hash Router', function(){
	describe('Create new route', function(){
		it('Empty Router Created', function(){
			var route = new HashRouter();
		});
	});
	describe('Add route to router', function(){
		it('should have a route with name "test" and pattern "test/"', function(){
			var router = new HashRouter();
			router.addRoute(/test\//, 'test', function(){return;});
			assert.equal(1, router.routes.length);
			assert.equal("test", router.routes[0].name);
			assert.equal(/test\//, router.routes[0].pattern);
		});
	})
});