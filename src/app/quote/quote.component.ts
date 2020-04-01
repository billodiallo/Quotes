import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
    new Quote(1,"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","Albert Einstein",new Date(1946,12,30),"Abert story",0,0),
    new Quote(2, "Be yourself; everyone else is already taken","Oscar Wilde",new Date(1935,0,10),"OScar story",0,0),
    new Quote (3,"A room without books is like a body without a soul"," Marcus Tullius Cicero",new Date(2014,11,20),"Tullus story",0,0),
    new Quote(4,"You only live once, but if you do it right, once is enough.","Mae West",new Date(1890,2,17),"Dionysious Kandusi",0,0),
    new Quote (5,"No one can make you feel inferior without your consent"," Eleanor Roosevelt",new Date(1936,10,25),"the sorty ",0,0)
    ];



    toggleDetails(index){
      this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
    }

     
  upVote(index){
    this.quotes[index].upvote ++;
  }
  downVote(index){
    this.quotes[index].downvote ++;
  }
  get topVotes(){
    return this.quotes.sort((x,y) =>{
      return <any>new Date (y.upvote)-<any>new Date (x.upvote);
    });
  }
  
  currentTop(){
    for(let quote of this.quotes){
if(this.quotes.indexOf(quote) === 0 && quote.upvote> 0){

return quote.name
}
}
  };



deleteQuote(isVoted, index){
  if (isVoted) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

    if (toDelete){
      this.quotes.splice(index,1)
    }
  }
}
addNewQuote(quote){
 

let quoteLength= this.quotes.length;
quote.id = quoteLength+1;
quote.datePublished = new Date(quote.datePublished)
this.quotes.push(quote)
}

  constructor() { }

  ngOnInit() {
  }
}
