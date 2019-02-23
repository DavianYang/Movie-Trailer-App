import APIModel from './APIModel.js';

// Extends APIModel
class MovieListModel extends APIModel {
   
    // Get Key 
    getUpcomingUrl(key){
        // Return the Upcoming URL
        return this.rootURL + this.upcoming_path.replace("<<api_key>>", key);
    }

    // Fetch key from APIModel
    async fetchUpcomingUrl(key){
        // return fetch(this.getUpcomingUrl(key))
        //             .then(res => res.json()); // Respones into JSON
        const fetchData = await fetch(this.getUpcomingUrl(key))
        const jsonResult = await fetchData.json();
        return jsonResult.results;
    }
}

export default MovieListModel;