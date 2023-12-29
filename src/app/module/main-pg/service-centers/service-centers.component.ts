import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-centers',
  templateUrl: './service-centers.component.html',
  styleUrls: ['./service-centers.component.scss']
})
export class ServiceCentersComponent implements OnInit {

  constructor(){}

  ngOnInit(){}

  id:any = '';
  accordion(ids:any){
    if(this.id == ids){
      this.id = '';
    }
    else {
      this.id = ids;
    }
  }

  // ReadMore:boolean = true;

  // visible:boolean = false;

  // onClick(){
  //   this.ReadMore = !this.ReadMore;
  //   this.visible = !this.visible;
  // }
// }
}
