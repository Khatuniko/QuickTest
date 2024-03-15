import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})

export class ReservationComponent implements OnInit {
  reservationForm:any = FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,  private router: Router) { }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      carNumber: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      date: ['', Validators.required],
      branches: ['', Validators.required],
      checkbox: [false, Validators.requiredTrue]
    });
  }

  onSubmit(){
    this.submitted = true;
  
    if(this.reservationForm.invalid){
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

  isFormValid(): boolean {
    return this.reservationForm.valid;
  }
  
  onDateChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const selectedDate = target.value;
    target.classList.add('selected-date');
  
   }
  }
  