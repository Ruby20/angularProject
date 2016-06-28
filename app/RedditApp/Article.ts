export class Article{
    vote:number;
    title:string;
    link:string;

    constructor(title:string,link:string,vote:number){
        this.vote = vote || 0;
        this.link = link;
        this.title = title;
    }

    voteUp(){
        this.vote +=1;
    }

    voteDown(){
        this.vote -= 1;
    }


}