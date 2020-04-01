import { Component, OnInit,Input } from '@angular/core';
import {Quote} from "../quote"

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  @Input() quote:Quote

  upvotes=0;
  downvotes=0;


  constructor() { }

  ngOnInit() {
  }

}
