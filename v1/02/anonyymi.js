'use strict';

const f = function () {
	return function (x) {
		return x + 1;
	};
}(); // Huomaa funktion kutsu!

const v = function () {
	return function (x, y) {
		//console.log(x + "," + y);
		if (x > y) {
			return 1;
		} else if (x < y) {
			return -1;
		} else if (x === y) {
			return 0;
		}
	};
}();

var t = (lis15, lis16, tau, ind) => {
	if (tau.length === lis15.length) {
		return tau;
	}
	else {
		tau.push(v(lis15[ind], lis16[ind]));
		//console.log(tau);
		return t(lis15, lis16, tau, ++ind);
	}
};

//let tulos = f(3);
//let ver = v(2, 3);
//let ver1 = v(3, 2);
//let ver2 = v(3, 3);

let lis2015 = [7.5, 9.6, 13.5, 17.1, 21.7, 25.4, 31.4, 27.8, 22.0, 18.0, 14.3, 11.3];
let lis2016 = [6.5, 5.3, 12.8, 19.8, 27.7, 28.6, 29.1, 26.1, 23.2, 16.2, 8.5, 9.1];

//console.log(tulos);
//console.log(ver);
//console.log(ver1);
//console.log(ver2);
console.log(t(lis2015, lis2016, [], 0));