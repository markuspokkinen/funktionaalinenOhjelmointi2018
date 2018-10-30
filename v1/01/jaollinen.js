function syt(p, q) {
	//Jos q on 0, palauta p.
	if (q === 0) {
		return p;
	}
	//Muuten
	else {
		//selvitä rekursiivisella metodikutsulla, mikä on suurin yhteinen tekijä q: lle ja p % q: lle,
		return syt(q, (p % q));
		//ja
		//palauta sama luku, jonka rekursiivinen kutsukin palautti.
	}
}
//console.log(syt(102, 68));
//console.log(syt(96, 52));
//console.log(syt(619, 3));
//console.log(syt(245, 68));
//console.log(syt(4, 2));



//Keskenään jaottomiksi tai suhteellisiksi alkuluvuiksi tai alkuluvuiksi toistensa suhteen sanotaan kahta lukua p ja q, jos p: n ja q: n suurin yhteinen tekijä on 1. 
//Sovella edellisen tehtävän algoritmia ja tee rekursiivinen funktio kjl(p, q), 
//joka tutkii ovatko kaksi lukua keskenään jaottomia.Esimerkiksi 35 ja 18 ovat keskenään jaottomia lukuja.
function kjl(p, q) {
	if (q === 0) {
		if (p === 1) {
			return true;
		} else {
			return false;
		}

	} else {
		return kjl(q, (p % q));
	}
}
//console.log(kjl(102, 68));
//console.log(kjl(96, 52));
//console.log(kjl(619, 3));
//console.log(kjl(245, 68));
//console.log(kjl(4, 2));

function potenssi(x, y) {
	if (y === 1) return x;
	else return x*potenssi(x, y - 1);
}
console.log(potenssi(2, 3));
console.log(potenssi(5, 5));
console.log(potenssi(7, 3));
console.log(potenssi(4, 3));
console.log(potenssi(1, 3));