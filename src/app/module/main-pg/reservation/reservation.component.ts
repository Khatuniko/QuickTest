// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-reservation',
//   templateUrl: './reservation.component.html',
//   styleUrls: ['./reservation.component.scss']
// })
// export class ReservationComponent {

// }


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  title = "ვიზიტის რეზერვაცია"
  // Initialize myForm in the constructor
  myForm: FormGroup = new FormGroup({
    'carname': new FormControl(''),
    'number': new FormControl(''),
    'date': new FormControl(''),
    'selectedOption': new FormControl(''),
    // Add more form controls as needed
  });

  ngOnInit() {
    // Additional initialization logic if needed
  }

  // Handle form submission
  onSubmit() {
    console.log(this.myForm.value);
    // Add further logic, such as sending the form data to the server
  }
}



