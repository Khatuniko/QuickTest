// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-reservation',
//   templateUrl: './reservation.component.html',
//   styleUrls: ['./reservation.component.scss']
// })
// export class ReservationComponent {

// }


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  title = "ვიზიტის რეზერვაცია"
  myForm: FormGroup = new FormGroup({
    'carname': new FormControl('', [Validators.required]),
    'number': new FormControl(''),
    'date': new FormControl(''),
    'selectedOption': new FormControl(''),
  });

  ngOnInit() {
    // Additional initialization logic if needed
  }

  // Handle form submission
  onSubmit() {
    console.log(this.myForm.value);
    // console.log(this.onSubmit);
    // Add further logic, such as sending the form data to the server
  }

  // get carname(){
  //   return this.loginForm.get('carname')
  // }
}



