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
  selectedHour: string | null = null;
  availableTimes: string[] = [];

  constructor(private formBuilder: FormBuilder,  private router: Router) {
    this.reservationForm = this.formBuilder.group({
      carNumber: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      date: ['', Validators.required],
      city: ['', Validators.required],
      checkbox: [false, Validators.requiredTrue],
      meetingTime:['', Validators.required]
    });
   }


  onSubmit(){
    this.submitted = true;
  
    if(this.reservationForm.invalid){
      return
    }
    Swal.fire({
      title: "თქვენ წარმატებით დაჯავშნეთ ვიზიტი",
      icon: "success",
      confirmButtonColor: "#F7A23E",
    }).then((result) => {
      if (result.isConfirmed) {
       this.router.navigate(['/']);
      }
    });
    
  }

  isFormValid(): boolean {
    return this.reservationForm.valid;
  }
 

  ngOnInit(): void {
    this.generateAvailableTimes();
  }

  onCityChange(): void {
    this.generateAvailableTimes();
  }

    
  onDateChange(event: Event) {
    this.generateAvailableTimes();
    const target = event.target as HTMLInputElement;
    const selectedDate = target.value;
    target.classList.add('selected-date');
   }

  generateAvailableTimes(): void {
    const selectedCity = this.reservationForm.get('city')?.value;
    const selectedDate = new Date(this.reservationForm.get('date')?.value);
    const dayOfWeek = selectedDate.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const isSaturday = dayOfWeek === 0 || dayOfWeek === 6;
    const isSunday = dayOfWeek === 0 || dayOfWeek === 0;

    switch (selectedCity) {
      case 'tbilisi':
        if (isSunday) {
          this.availableTimes = 
          ['09:00','09:30', '10:00', '10:30', '11:00', '11:30', 
          '12:00', '12:30','13:00', '13:30', '14:00', '14:30'];
        }  else if (isSaturday) {
          this.availableTimes = 
           ['09:00','09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', 
           '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'];

        }else {
          this.availableTimes = [ '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
              '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
              '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
              '18:00', '18:30' ]
        }
      break;
      case 'rustavi':
        this.availableTimes = isWeekend ? ['09:00', '09:30', '10:00', '10:30', '11:00', 
        '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
        '15:00', '15:30', '16:00', '16:30'] 
        : ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
        '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
        '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
        '18:00', '18:30'];
        break;
      case 'kutaisi':
        this.availableTimes = isWeekend ? ['10:00', '10:30', '11:00', '11:30',
        '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',] 
        : ['10:00', '10:30', '11:00', '11:30',
        '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
        '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',];
        break;
      case 'batumi':
        this.availableTimes = isWeekend ? ['10:00', '10:30', '11:00', '11:30',
        '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
        '15:00', '15:30', '16:00', '16:30']
        : ['10:00', '10:30', '11:00', '11:30',
        '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
        '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',];
        break;
      default:
        this.availableTimes = [];
        break;
    }
  }
}
  
