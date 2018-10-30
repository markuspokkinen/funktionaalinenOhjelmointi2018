function onPalindromi(merkkijono) {
	merkkijono = merkkijono.toLowerCase();

	//Jos merkkijonon pituus on 0 tai 1, palauta true.
	if (merkkijono.length === 0 || merkkijono.length === 1) {
		return true;
	}
	//Muuten jos merkkijonon ensimmäinen ja viimeinen merkki ovat erilaiset, palauta false.
	if (merkkijono.slice(0, 1) !== merkkijono.slice(merkkijono.length - 1, merkkijono.length)) {
		return false;
	} else {
		//Muissa tapauksissa ota jonon keskiosa, josta puuttuvat ensimmäinen ja viimeinen merkki,
		//selvitä rekursiivisella metodikutsulla, onko keskiosa palindromi, ja
		//palauta sama totuusarvo, jonka rekursiivinen kutsukin palautti.
		return onPalindromi(merkkijono.slice(1, merkkijono.length - 1));
	}
}
console.log(onPalindromi("saippuakauppias"));
console.log(onPalindromi("Saippuakauppias"));
console.log(onPalindromi("sas"));
console.log(onPalindromi("abcd"));
console.log(onPalindromi("metropolia"));
