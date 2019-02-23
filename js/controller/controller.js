import MovieItemModel from '../model/MovieItemModel.js';
import MovieListModel from '../model/MovieListModel.js';
import MovieListView from '../view/MovieListView.js';
import MovieDetailView from '../view/MovieDetailView.js';
import Likes from '../model/Likes.js';
import LikesView from '../view/LikesView.js';

class Controller {
    constructor(){
        // Model
        this.movieItemModel = new MovieItemModel();
        this.movieListModel = new MovieListModel();
        this.likes = new Likes();

        // View
        this.movieListView = new MovieListView(this); // Pass the whole Controller Object inot movieListView
        this.movieDetailView = new MovieDetailView(this);
        this.likesView = new LikesView(this);
        
        this.movieObjects = [];
    }

    // Initializing...
    async init(){
        const jsonresult = await this.movieListModel.fetchUpcomingUrl(this.movieListModel.key); // Fetch Upcoming URL from Movie List Model
        const movieObj = this.getUpcomingMovieData(jsonresult); // Get Upcoming Movie Data
        this.displayMovieList(movieObj); // Display Movie List
    }

    // Get Upcoming Movie Data
    getUpcomingMovieData(data){

        // Loop through the results which is in data to get movie
        for(let movie of data){

            // Create Movie Objects, Update this if U ADD new feature
            const movieObj = new MovieItemModel(movie.id, movie.title, movie.poster_path, movie.vote_average, movie.genre_ids[0], movie.genre_ids[1], movie.genre_ids[2],movie.homepage, movie.overview, movie.backdrop_path, movie.release_date, movie.production_companies);

            // // Push into Movie Objects Array
            this.movieObjects.push(movieObj);

        }
        // Return Movie Objects
        return this.movieObjects;
    }

    // Display Movie List
    displayMovieList(movieObjects, templates = []){

        // Loop through the Movie Objects
        for(let movieObj of movieObjects){

            // Push Movie Object into templates Array
            templates.push(this.movieListView.getItemTemplate(movieObj));;
        }

        // Render the templates array into the movelistView
        this.movieListView.render(templates);
    }

    // Display Movie Detail
    async displayMovieDetail(id){
        // Get Movie Detail Object from Movie Item Model
        const promiseResult = await this.movieItemModel.getMovieDetail(id, this.movieListModel.key);

        this.likes.getLike(promiseResult.id, promiseResult.title, promiseResult.release_date, promiseResult.poster)

        // Update View
        this.movieDetailView.render(promiseResult);
    }

    // Change To List View
    changeListView() {
        this.displayMovieList(this.movieObjects);
    }
}


export default Controller;