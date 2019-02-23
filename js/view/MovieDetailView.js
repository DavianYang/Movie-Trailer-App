class MovieDetailView {
    constructor(controller){
        this.itemTemplate = document.getElementById('template-content-detail').innerHTML;
        this.viewport = document.getElementById('viewport');
        this.videoTemplate = document.getElementById('youtube-video-template').innerHTML;
        this.likes = document.getElementById('likes__list').innerHTML;
        this.viewport.addEventListener('click',(e) => this.listViewEventListener(e));
        this.homeBtn = document.getElementById('side-logo');
        this.homeBtn.addEventListener('click',() => this.controller.changeListView());
        this.controller = controller;
    }

    listViewEventListener(e){
        const target = e.target;

        if(target && target.parentNode.classList.contains('toback')){
            this.controller.changeListView();
        } 

        e.preventDefault();
    }

    getVideoTemplate(videos){

        let template = "";

        for(let video of videos){
            template += this.videoTemplate.replace("{{id}}", video.key);
        }

        return template;
    }


    render(obj) {
        this.viewport.innerHTML = this.getItemTemplate(obj);
    }

    getItemTemplate(object){

            const videoTemplate = this.getVideoTemplate(object.videos);

            const result = this.itemTemplate
            .replace("{{this.title}}", object.title)
            .replace("{{this.id}}", object.id)
            .replace("{{this.poster}}",`https://image.tmdb.org/t/p/w500${object.poster}`)
            .replace("{{this.overview}}", object.overview)
            .replace("{{this.genres1}}", object.genres1)
            .replace("{{this.genres2}}", object.genres2)
            // .replace("{{this.genres3}}", object.genres3)
            .replace("{{this.production_companies1}}", object.production_companies1)
            .replace("{{this.production_companies2}}", object.production_companies2)
            .replace("{{this.video}}", videoTemplate);

            // Return 
            return result;
    }
}

export default MovieDetailView;