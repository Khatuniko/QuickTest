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
  timeSlots: string[] = [];
  selectedHour: string | null = null;

  constructor(private formBuilder: FormBuilder,  private router: Router) {
    for (let hour = 10; hour < 19; hour++) {
      this.timeSlots.push(`${hour}:00`);
      this.timeSlots.push(`${hour}:30`);
    }
   }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      carNumber: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      date: ['', Validators.required],
      branches: ['', Validators.required],
      checkbox: [false, Validators.requiredTrue],
      hours:['', Validators.required]
    });
  }

  onSubmit(){
    this.submitted = true;
  
    if(this.reservationForm.invalid){
      return
    }
    // Swal.fire({
    //   title: "თქვენ წარმატებით დაჯავშნეთ ვიზიტი",
    //   text: "გნებავთ გადახდა?",
    //   icon: "success",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "დიახ, ბარათით გადახდა",
    //   cancelButtonText: "არა, ადგილზე გადავიხდი",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     this.router.navigate(['/payment']);
    //   }
    // });
        Swal.fire({
      title: "თქვენ წარმატებით დაჯავშნეთ ვიზიტი",
      icon: "success",
      confirmButtonColor: "#F7A23E",
    })


  }

  isFormValid(): boolean {
    return this.reservationForm.valid;
  }
  
  onDateChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const selectedDate = target.value;
    target.classList.add('selected-date');
  
   }

  handleHourSelection(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log(`Selected meeting hour: ${selectedValue}`);
    this.selectedHour = selectedValue; // Set the selected meeting hour
  }

  }
  
