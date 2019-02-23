import APIModel from './APIModel.js';

// Extends APIModel
class MovieItemModel extends APIModel {
    
    constructor(id, title, poster, rating, genres1, genres2, genres3, trailers, overview, background, release_date, production_companies1, production_companies2){
        super();
        this.id = id;
        this.title = title;
        this.poster = poster;
        this.rating = rating;
        this.genres1 = genres1;
        this.genres2 = genres2;
        this.genres3 = genres3;
        this.trailers = trailers;
        this.overview = overview;
        this.background = background;
        this.release_date = release_date;
        this.production_companies1 = production_companies1;
        this.production_companies2 = production_companies2;
    }

    // Get Movie Detail
    async getMovieDetail(movie_id, key){
        // Fetch the API URL with movie ID and key
        const promiseResult = await fetch(this.getDetailAPIUrl(movie_id, key)); 
        const jsonResult = await promiseResult.json(); 

        // Fetch Movie Url
        const fetchVideoResult = await fetch(this.getVideoAPIUrl(movie_id, key));
        const videoJson = await fetchVideoResult.json(); 

        const convertedPromise = this.updateData(jsonResult, videoJson.results);

        return convertedPromise;
    }

    getDetailAPIUrl(movie_id, key){
        return this.generateAPIPath(this.detail_path, movie_id, key);
    }

    getVideoAPIUrl(movie_id, key){
        return this.generateAPIPath(this.videos_path, movie_id, key);
    }

    generateAPIPath(rawPath,movie_id,key){
        return this.rootURL + rawPath.replace("{movie_id}",movie_id).replace("<<api_key>>",key);
    }

    // Update Movie Object
    updateData(data, videos){
        // console.log(data);
        this.id = data.id;
        this.title = data.original_title;
        this.poster = data.poster_path;
        this.rating = data.vote_average;
        this.genres1 = data.genres[0].name;
        this.genres2 = data.genres[1].name;
        // this.genres3 = data.genres[3].name;
        this.trailers = data[""];
        this.overview = data.overview;
        this.release_date = data.release_date;
        this.production_companies1 = data.production_companies[0].name;
        this.production_companies2 = data.production_companies[1].name;
        this.videos = videos;

        // Return Object
        return this;
    }
}

export default MovieItemModel;

