import { Component, OnInit} from '@angular/core';
import { NewsService } from './services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {

object: any[] = []; 

navigateToDetails(id: number) {
  this.router.navigate([`news/${id}`])
  }

constructor(private newsService: NewsService, private router:Router) {} 

ngOnInit() {
  this.newsService.getNews().subscribe({
    next: (res) => { 
      this.object = res; 
      console.log(this.object); 
    }
  });
}
}