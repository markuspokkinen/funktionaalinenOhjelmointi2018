'use strict';


var foo = (function(){
	let x;
	var f, g;
	f = function () { return ++x; };
	g = function () { return --x; };
	x = 1;
	console.log('inside foo, call to f(): ' + f());
	return {kasvata: f,vahenna:g};
})();
foo;
console.log('call to g(): ' + foo.vahenna()); 
console.log('call to f(): ' + foo.kasvata()); 