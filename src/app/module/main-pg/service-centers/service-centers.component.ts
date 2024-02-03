import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-service-centers',
  templateUrl: './service-centers.component.html',
  styleUrls: ['./service-centers.component.scss']
})
export class ServiceCentersComponent implements OnInit {
  email = 'info@qt.ge';

  constructor(){}

  ngOnInit(){}

  id:any = 'f1';
  accordion(ids:any){
    if(this.id == ids){
      this.id = '';
    }
    else {
      this.id = ids;
    }
  }

}
