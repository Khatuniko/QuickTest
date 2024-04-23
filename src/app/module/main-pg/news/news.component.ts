import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewsService } from './services/news.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @Output() sendIdToChildEvent = new EventEmitter<number>();

  navigateToDetails(id: number) {
  this.router.navigate([`news/${id}`])
  }


  object: any[] = []; 

  
  constructor(private newsService: NewsService, private router:Router) {

  } 

  cards: any[] = [/* card data here */];
  cardsPerPage = 10;
  currentPage = 1;
  totalPages = 0; 
  paginatedCards: any[] = [];

  ngOnInit() {
    this.totalPages = Math.ceil(this.cards.length / this.cardsPerPage);
    this.paginateCards();

    this.newsService.getNews().subscribe({
      next: (res) => { 
        this.object = res; 
        console.log(this.object); 
      }
    });
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

  logId(id:number){
    console.log(id);
  }

}