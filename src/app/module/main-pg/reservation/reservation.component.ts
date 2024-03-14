import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  registerForm:any = FormGroup;
  submitted = false;
  constructor(private formBuilder:FormBuilder, private router: Router){
    this.registerForm = this.formBuilder.group({
    })
  }


  onSubmit(){
    this.submitted = true;

    if(this.registerForm.invalid){
      return
    }
    Swal.fire({
      title: "წარმატებით დაიჯავშნა ვიზიტი",
      text: "გნებავთ გადახდა?",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "დიახ",
      cancelButtonText: "არა",
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/payment']);
      }
    });

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

  onDateChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const selectedDate = target.value;
    target.classList.add('selected-date');
  }
  




}



