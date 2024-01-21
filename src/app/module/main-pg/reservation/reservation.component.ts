import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  
  myForm: FormGroup = new FormGroup({
    'carname': new FormControl('', [Validators.required]),
    'number': new FormControl('', [Validators.required]),
    'date': new FormControl('', [Validators.required]),
    'selectedOption': new FormControl('', [Validators.required]),
  });

  
  ngOnInit() {

  }


}



