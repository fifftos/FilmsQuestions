"use district";

const number0Films =+prompt ('Сколько фильмов Вы уже посмотрели?','');

const personalMovieDB = {
                    count: number0Films,
                    movies: {},
                    actors: {},
                    genres: [],
                    privat: false
};

const a = prompt ('Один из последних просмотренных фильмов?',''),
      b = prompt ('На сколько вы оцените его по 10-бальной шкале?',''),
      c = prompt ('Один из последних просмотренных фильмов?',''),
      d = prompt ('На сколько вы оцените его по 10-бальной шкале?','');

 personalMovieDB.movies[a] = b;
 personalMovieDB.movies[c] = d;