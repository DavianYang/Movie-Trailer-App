class MovieListView {
    constructor(controller){
        this.itemTemplate = document.getElementById('template-content-list').innerHTML;
        this.viewport = document.getElementById('viewport');
        this.viewport.addEventListener('click',(e) => this.detailClickEventListener(e));
        this.controller = controller;
    }

    detailClickEventListener(e){
        const target = e.target;

        if(target && target.parentNode.classList.contains('detail-view')){

            this.controller.displayMovieDetail(target.parentNode.dataset.id);

            e.preventDefault();
        }

    }

    // Get Item Template from Controller.displayMovieList
    getItemTemplate(object){

        const result = this.itemTemplate
                            .replace("{{this.id}}", object.id)
                            .replace("{{this.title}}",object.title)
                            .replace("{{this.poster}}",`https://image.tmdb.org/t/p/w500${object.poster}`)
                            .replace("{{this.rating}}",object.rating)
                            .replace("{{this.release_date}}", object.release_date)
                            

        // Return Result 
        return result;

    }

    // Rendering Templates
    render(templates){

        // Reach to the top of the website
        document.documentElement.scrollTop = 0; 

        this.viewport.innerHTML = "";

        for(let template of templates){
            // Render Each Template into viewport
            this.viewport.innerHTML += template;
        }
    }
    
}

export default MovieListView;