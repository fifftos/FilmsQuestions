"use strict";

let numberOfFilms; 

function start () {
    numberOfFilms = +prompt('Сколько фильмов мы посмотрели за год?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN (numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов мы посмотрели за год?', '');
    }

}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

 

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt ('Что последнее смотрели?',''),
        b = prompt ('И на сколько фильм вытянул с 1 до 10?','');
        personalMovieDB.movies[a] = b;
        
        if (a != null && b != null && a !='' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log ('done');
        } else {
            console.log ('error');
            i--;
        }
    }
}

rememberMyFilms(); 


     function detectPersonalLevel () {
        if (personalMovieDB.count < 10) {
            console.log ("Да ладна! Быть не может,не верю)");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log ("Какие то  мы скучные");
        } else if (personalMovieDB.count >= 30) {
            console.log ("Во!!! Это по нашему!");
           }
            else {
                console.log ("Уупс!.. Что-то пошло не так!");
            }
       
     }
 detectPersonalLevel ();

 function showMyDB (hidden) {
     if (!hidden) {
         console.log (personalMovieDB);
     }
 }

showMyDB (personalMovieDB.privat);

function writeYourGenres () {
    for (let i = 1;i <= 3; i++) {
        personalMovieDB.genres [i - 1] = prompt (`Твой любимый жанр под номером ${i}`);
    }
}
writeYourGenres();