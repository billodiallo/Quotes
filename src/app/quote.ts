export class Quote {
  showAuthor:boolean;
  constructor(public id:number,public name:string,public author:string,public datePublished:Date,public submitter:string, public upvote:number,public downvote:number,){
    this.showAuthor=false;
}
}

