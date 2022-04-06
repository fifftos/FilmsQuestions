"use strict";

const number0Films =+prompt ('Рассказывай давай,сколько отмотала часов за телеком?','');

const personalMovieDB = {
                    count: number0Films,
                    movies: {},
                    actors: {},
                    genres: [],
                    privat: false
};

const a = prompt ('Че палила последнее?',''),
      b = prompt ('Как тебе по 10-бальной?',''),
      c = prompt ('Че палила последнее?',''),
      d = prompt ('Как тебе по 10-бальной?','');

 personalMovieDB.movies[a] = b;
 personalMovieDB.movies[c] = d;

console.log (personalMovieDB);