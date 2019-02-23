class Movie {
    constructor(id, title, poster, rating, genres1, genres2, casts){
        this.id = id;
        this.title = title;
        this.poster = poster;
        this.rating = rating;
        this.genres1 = genres1;
        this.genres2 = genres2;
        this.casts = casts;
    }

    render(template){
        this.detailTemplate = template;
        const result = this.detailTemplate
        .replace("{{this.id}}", this.id)
        .replace("{{this.title}}",this.title)
        .replace("{{this.poster}}",`https://image.tmdb.org/t/p/w500${this.poster}`)
        .replace("{{this.rating}}",this.rating)
        .replace("{{this.genres1}}",this.genres1)
        .replace("{{this.genres2}}",this.genres2)
        .replace("{{this.casts}}",this.casts)
        return result;
    }

}

export default Movie;