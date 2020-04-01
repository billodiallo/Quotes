import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dates'
})
export class DatesPipe implements PipeTransform {

  transform(value: any):number{
let today:Date = new Date(); //get current date and time
let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
var dateDifference = Math.abs(value - todayWithNoTime) //returns value in miliseconds
const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
var dateDifferenceSeconds = dateDifference*0.001; //converts miliseconds to seconds
var dateCounter = Math.round(dateDifferenceSeconds/secondsInDay);
var upDate =dateCounter/365
if (dateCounter >= 1 && value > todayWithNoTime){
  return 0;
}else{
  return Math.round(upDate);
     }
  }
}

