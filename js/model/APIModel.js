class APIModel {
    constructor(){
        this.rootURL = "https://api.themoviedb.org/3/"; // Root URL
        this.upcoming_path = "movie/upcoming?api_key=<<api_key>>&language=en-US&page=1"; // Upcoming Path
        this.detail_path = "movie/{movie_id}?api_key=<<api_key>>"; // Detail Path
        this.videos_path = "movie/{movie_id}/videos?api_key=<<api_key>>"; // Video Path
        this.key = "66296b02dcb2fe8d4abfed86b2332c99"; // Key
    }
}

export default APIModel;