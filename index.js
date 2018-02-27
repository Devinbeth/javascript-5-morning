let movies = require('./data.js');
let _ = require('underscore');

// _.forEach(movies, (e) => console.log(e.title));
// movies.forEach((e) => console.log(e.title));

// let moviesByRating = _.groupBy(movies, 'contentRating');
// console.log(moviesByRating);

// let moviesByDecade = _.groupBy(movies, (movie) => Math.floor(movie.year / 10) * 10);

// console.log(_.sample(movies, 3));

// let PGMovies = _.where(movies, {contentRating: 'PG'});
// let PGMovies2 = _.filter(movies, (e) => e.contentRating === 'PG');

// let PGMovies = _.where(movies, {contentRating: 'PG', imdbRating: 8.5});
// let PGMovies2 = _.filter(movies, (e) => e.contentRating === 'PG' && e.imdbRating === 8.5);

let myFriends = ['bob', 'joe', 'jen', 'bruce', 'linds'];
let yourFriends = ['bob', 'jack', 'jen', 'bruce', 'brit'];

let allFriends = _.union(myFriends, yourFriends);
let sharedFriends = _.intersection(myFriends, yourFriends);

let 