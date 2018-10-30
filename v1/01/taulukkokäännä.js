function käännä(arr, kaannetty) {
	if (arr.length === 0) return kaannetty;
	else {
		kaannetty.push(arr[arr.length-1]);
		arr.pop();
		return käännä(arr, kaannetty);
	}
}

console.log(käännä([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],[]));