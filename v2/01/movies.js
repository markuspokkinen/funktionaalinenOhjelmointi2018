var data = [
		{
			title: 'Harry Potter and the Deathly Hallows: Part 2',
			director: 'David Yates',
			release: 2011
		},
 		{
 			title: 'The Lord of the Rings: The Fellowship of the Ring',
 			director: 'Peter Jackson',
 			release: 2001
 		},
 		{
 			title: 'Titanic',
 			director: 'James Cameron',
 			release: 1997
 		},
 		{
 			title: 'Avatar',
 			director: 'James Cameron',
 			release: 2009
 		},
 		{
 			title: 'The Hobbit: An Unexpected Journey',
 			director: 'Peter Jackson',
 			release: 2012
 		},
 		{
 			title: 'The Matrix',
 			director: 'Andy Wachowski',
 			release: 1999
 		},
 		{
 			title: 'Inception',
 			director: 'Christopher Nolan',
 			release: 2010
 		},
 		{
 			title: 'The Town',
 			director: 'Ben Affleck',
 			release: 2010
 		},
 		{
 			title: 'The Dark Knight Rises',
 			director: 'Christopher Nolan',
 			release: 2012
 		},
 		{
 			title: 'My Neighbor Totoro',
 			director: 'Hayao Miyazaki',
 			release: 1988
 		},
 		{
 			title: 'Spirited Away',
 			director: 'Hayao Miyazaki',
 			release: 2001
 		}
]

//console.log(data.map((one) => one.title + ", " + one.release));
//console.log(data.filter((one) =>one.release > 2011));

let lis2015 = [((7.5 + (-39.6)) / 2), ((9.6 + (-34.1)) / 2), ((13.5 + (-28.1)) / 2), ((17.1 + (-15.5)) / 2), ((21.7 + (-12.4)) / 2), ((25.4 + (-3.5)) / 2), 31.4, 27.8, 22.0, 18.0, 14.3, 11.3];
let lis2016 = [6.5, 5.3, 12.8, 19.8, 27.7, 28.6, 29.1, 26.1, 23.2, 16.2, 8.5, 9.1];

console.log(lis2015.map((undefined, index) => lis2015[index] + lis2016[index])
	.filter((one) => one > 0)
	.reduce((acc, curval, curind) => (acc + curval) / curind));