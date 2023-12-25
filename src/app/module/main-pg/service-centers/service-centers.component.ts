import { Component } from '@angular/core';

@Component({
  selector: 'app-service-centers',
  templateUrl: './service-centers.component.html',
  styleUrls: ['./service-centers.component.scss']
})
export class ServiceCentersComponent {

  ReadMore:boolean = true;

  visible:boolean = false;

  onClick(){
    this.ReadMore = !this.ReadMore;
    this.visible = !this.visible;
  }
}
