"use strict"

/*const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};*/


/*for (let i = 0; i < 2; i++) {
	const a = prompt("Один из последних просмотренных фильмов?", ""),
		  b = prompt("На сколько оцените его?", "");

	if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('error');
		i--;
	}
}

if (personalMovieDB.count < 10) {
	console.log('Мало посмотрели фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log('Более менее');
} else if (personalMovieDB.count >= 30) {
	console.log('Вы киноман');
} else {
	console.log('Произошла ошибка');
}*/


/*let i = 0;
do {
	const a = prompt("Один из последних просмотренных фильмов?", ""),
		  b = prompt("На сколько оцените его?", "");

	if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
		i++;
	} else {
		console.log('error');
		i--;
	}
} while (i < 2);

if (personalMovieDB.count < 10) {
	console.log('Мало посмотрели фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log('Более менее');
} else if (personalMovieDB.count >= 30) {
	console.log('Вы киноман');
} else {
	console.log('Произошла ошибка');
}

console.log(personalMovieDB);*/


/*function showFirstMessage(a, b) {
	return(a + b);
}

console.log(showFirstMessage(4, 5));*/

const str = 'test';

console.log(str.toUpperCase());

const fruit = 'Some fruit';
console.log(fruit.indexOf('me'));

const logg = "Vladimir";
console.log(logg.slice(5, 8));

console.log(logg.substring(5, 8));

console.log(logg.substr(5, 3));

const num = 12;
console.log(Math.random(num));



