function potenssi(n, b) {

	function pot(x, y, z) {
		//console.log(x + "," + y + "," + z);
		if (y === 1) return z;
		else return pot(x, y - 1,z*x);
	}
	return pot(n, b,n);
}

console.log(potenssi(2, 3));
console.log(potenssi(5, 5));
console.log(potenssi(7, 3));
console.log(potenssi(4, 3));
console.log(potenssi(1, 3));