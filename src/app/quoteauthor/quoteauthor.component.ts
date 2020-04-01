import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';
import { Quote } from "../quote"


@Component({
  selector: 'app-quoteauthor',
  templateUrl: './quoteauthor.component.html',
  styleUrls: ['./quoteauthor.component.css']
})
export class QuoteauthorComponent implements OnInit {
@Input() quote: Quote;
@Output() isVoted = new EventEmitter<boolean>();


}
  constructor() { }

  ngOnInit() {
  }

}
