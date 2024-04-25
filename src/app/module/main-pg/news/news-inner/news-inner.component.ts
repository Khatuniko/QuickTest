import { Component, OnInit } from '@angular/core';
import { NewsInnerService } from './news-inner-services/news-inner.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-news-inner',
  templateUrl: './news-inner.component.html',
  styleUrls: ['./news-inner.component.scss']
})
export class NewsInnerComponent implements OnInit { 
  object:any;
  newsItem: any;
  public id: any | null = "";

constructor(private newsService: NewsInnerService, private route: ActivatedRoute) {}


ngOnInit() {
  this.id = this.route.snapshot.paramMap.get('id');
  console.log(this.id);

  this.newsService.getNewsInner(this.id).subscribe({
    next: (res) => { 
      this.object = res; 
      console.log(this.object); 
    }
  });
}
}
