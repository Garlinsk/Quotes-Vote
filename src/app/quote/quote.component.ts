import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote("ANC", "Julius Malema", "Mama give us a sign", 0, 0 ,new Date(2021,3,18)),
    new Quote("Lupita", "Black Panther", "Wakanda Forever",0, 0, new Date(2021,3,18))]
  // preNum: number
  // lastNum: number
  // counter: number

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.newDate = new Date(quote.newDate);
    this.quotes.push(quote)
  }

  upvote(i) {
    this.quotes[i].upvotes += 1
  }
  downvote(i) {
    this.quotes[i].downvotes += 1
  }
  delQuote(i) {
    this.quotes.splice(i, 1)
  }
  // highestUpvote() {
  //   this.preNum = 0
  //   this.lastNum = 0

  //   for (this.counter = 0; this.counter < this.quotes.length; this.counter++) {
  //     this.lastNum = this.quotes[this.counter].upvotes;
  //     if (this.lastNum > this.preNum) { this.preNum = this.lastNum }
  //   }
  //   return this.preNum
  // }
  constructor() { }

  ngOnInit() {
  }

}

// export class QuoteComponent implements OnInit {

//   quotes:Quote[] = [
//    new Quote (2, 'Eratus', 'When you reach the end of your rope, tie a knot in it and hang on.', 'Franklin D. Roosevelt',new Date(2021,3,18),0,0),
//    new Quote (3, 'Antony', 'The future belongs to those who believe in the beauty of their dreams.', 'Eleanor Roosevelt',new Date(2021,4,16),0,0),
//    new Quote (1, 'Rayan', 'Life is what happens when you`re busy making other plans.', 'John Lennon',new Date(2021,5,12),0,0),
//    new Qu