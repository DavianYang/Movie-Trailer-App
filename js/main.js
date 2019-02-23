import Movie from '/js/Movie.js';

function readData(data, movieArray = []){
    for(let movie of data.results) {
        const movieObj = new Movie(movie.id, movie.title, movie.poster_path, movie.vote_average, movie.genre_ids[0], movie.genre_ids[1], movie.overview);
        movieArray.push(movieObj);
    }
    console.log(movieArray);
    return movieArray;
}

function displayMovies(movieArray, template, viewport){
    for(let movie of movieArray){
        viewport.innerHTML += movie.render(template);
    }
}

// function displayPopup(movieArray, template){
//     for(let movie of movieArray){
//         popup.innerHTML += movie.render(template);
//     }
// }

export {readData, displayMovies};