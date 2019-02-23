// import LikesView from '../view/LikesView.js';

export default class Likes {
    constructor(){
        this.likesArr = [];
        this.current = null;


        console.log(this.current);
        // View
        // this.likesView = new LikesView(this);
    }

    getLike(id, title, release_date, img){
        const like = {id, title, release_date, img};

        this.current = like;
    }

    addLike(){
        const like = this.current;

        this.likesArr.push(like);

        console.log(this.likesArr);

        // this.persistData();

        return like;
    }

    deleteLike(id){
        const index = this.likesArr.findIndex(el => el.id === id);
        this.likesArr.splice(index, 1);

        this.persistData();
    }

    isLiked(id){
        return this.likesArr.findIndex(el => el.id === id) !== -1;
    }

    getNumlikes(){
        localStorage.setItem('likes', JSON.stringify(this.likesArr));
    }

    persistData() {
        localStorage.setItem('likes', JSON.stringify(this.likesArr));
    }

    readStorage(){
        const storage = JSON.parse(localStorage.getItem('likesArr'));
        
        if(storage) this.likesArr = storage;
    }
}