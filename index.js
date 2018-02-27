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

// let PG8Movies = _.where(movies, {contentRating: 'PG', imdbRating: 8.5});
// let PG8Movies2 = _.filter(movies, (e) => e.contentRating === 'PG' && e.imdbRating === 8.5);

// let myFriends = ['bob', 'joe', 'jen', 'bruce', 'linds'];
// let yourFriends = ['bob', 'jack', 'jen', 'bruce', 'brit'];

// let allFriends = _.union(myFriends, yourFriends);
// let sharedFriends = _.intersection(myFriends, yourFriends);

function longSum(n) {
    let myTotal = 0;
    for (let i = 0; i < n; i++) {
        myTotal += i;
    }
    return myTotal;
}

let memoizeFunction = _.memoize(longSum);

console.time('timer');
let mySum = memoizeFunction(1000000000);
console.timeEnd('timer');

console.time('timer');
mySum = memoizeFunction(1000000000);
console.timeEnd('timer');
