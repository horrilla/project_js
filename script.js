"use strict"

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const lastFilm = prompt('Один из последних просмотренных фильмов', ''),
			rateFilm = prompt('На сколько оцените его?', ''),
			lastFilmTwo = prompt('Один из последних просмотренных фильмов', ''),
			rateFilmTwo = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilm] = rateFilm;
personalMovieDB.movies[lastFilmTwo] = rateFilmTwo;

console.log(personalMovieDB);



