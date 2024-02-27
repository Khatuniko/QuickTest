import { Component} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

    // const maps = Document.getElementByTagName("div");
    // const map =  Div.getattribute("data-attr");
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
