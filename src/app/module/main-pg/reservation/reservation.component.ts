import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  registerForm:any = FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder){

  }

  onSubmit(){
    this.submitted = true;

    if(this.registerForm.invalid){
      return
    }
    alert("Success")

  }

  ngOnInit() {
    //validations

    this.registerForm = this.formBuilder.group({
      carNumber:['', Validators.required],
      mobileNumber:['', Validators.required,Validators.minLength(9)],
      date:['', Validators.required],
      branches: ['', Validators.required],
      checkbox:['', Validators.required]
    })

  }



  
  // myForm: FormGroup = new FormGroup({
  //   // registerForm: FormGroup = new FormGroup({
  //   'firstName': new FormControl('', [Validators.required]),
  //   'lastName': new FormControl('', [Validators.required]),
  //   'date': new FormControl('', [Validators.required]),
  //   'selectedOption': new FormControl('', [Validators.required]),
  // });

  
 

  // sxva 



  
  onDateChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const selectedDate = target.value;
    target.classList.add('selected-date');
  }
  




}



