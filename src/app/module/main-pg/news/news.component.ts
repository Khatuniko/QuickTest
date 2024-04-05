import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  cards: any[] = [/* card data here */];
  cardsPerPage = 10;
  currentPage = 1;
  totalPages = 0; 
  paginatedCards: any[] = [];

  ngOnInit() {
    this.totalPages = Math.ceil(this.cards.length / this.cardsPerPage);
    this.paginateCards();
  }

  paginateCards() {
    const startIndex = (this.currentPage - 1) * this.cardsPerPage;
    const endIndex = startIndex + this.cardsPerPage;
    this.paginatedCards = this.cards.slice(startIndex, endIndex);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateCards();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginateCards();
    }
  }
  
}
