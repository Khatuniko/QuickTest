import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-remainder',
  templateUrl: './remainder.component.html',
  styleUrls: ['./remainder.component.scss']
})
export class RemainderComponent {
  successAlert(){
    Swal.fire({
      title: "გააქტიურებულია",
      confirmButtonColor: "#F7A23E",
      icon: "success"
    });
  }
  }
