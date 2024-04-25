import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservationService } from './bookingservices/reservation.service';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})

export class ReservationComponent {
  reservationForm:any = FormGroup;
  submitted = false;
  selectedHour: string | null = null;
  availableTimes: string[] = [];
  branches: string[] = [];
  centers: any [] = [];
  branchName!: string;
  BranchData!:any;
  uniqueBranchNames: string[] = [];
  payment!: number;
  response!:any;


constructor(private translateService: TranslateService,
  private formBuilder: FormBuilder,
  private router: Router, 
  private reservationService: ReservationService) {
  this.reservationForm = this.formBuilder.group({
    carNumber: ['', Validators.required],
    mobileNumber: ['', Validators.required],
    date: ['', Validators.required],
    city: ['', Validators.required],
    checkbox: [false, Validators.requiredTrue],
    meetingTime:['', Validators.required],
    personName:['', Validators.required]
  });
}

onDateChange(event: Event) {
  const target = event.target as HTMLInputElement;
  const dateString = target.value;

  this.reservationService.getBooking(dateString).subscribe(
    (response) => {
      this.centers = response;
      this.uniqueBranchNames = this.getUniqueBranchNames(this.centers);
      console.log('Unique branch names:', this.uniqueBranchNames);

      if (dateString) {
        target.classList.add('selected-date');
      } else {
        target.classList.remove('selected-date');
      }
    },
    (error) => {
      console.error('Error fetching booking data:', error);
    }
  );
}


postBooking(payment:number){
  const bookingData = {
    GovNumber: this.reservationForm.get('carNumber').value,
    BranchId: this.getBranchId(this.reservationForm.get('city').value), 
    BookingTime: this.reservationForm.get('meetingTime').value,
    MobileNumber: this.reservationForm.get('mobileNumber').value,
    PersonName: this.reservationForm.get('personName').value,
    PaymentType:  payment
  };

  this.reservationService.postBooking(bookingData).subscribe(
    response => {

  if(response.Code===0){
    Swal.fire({
      title: "თქვენ წარმატებით დაჯავშნეთ ვიზიტი",
      icon: "success",
      confirmButtonColor: "#F7A23E",
    }).then((result) => {
      if (result.isConfirmed) {
       this.router.navigate(['/']);
      }
    });
  }else{Swal.fire({
      title: "თქვენი ვიზიტი ვერ დაიჯავშნა",
      text:"გთხოვთ,ცადოთ თავიდან",
      icon: "error",
      confirmButtonColor: "#FF0000",
    }).then((result) => {
      if (result.isConfirmed) {
       this.router.navigate(['/reservation']);
      }
    });}
    },
    error => {
    }
  );

  console.log(bookingData);
}

getBranchId(selectedCenter: string): number {
  switch(selectedCenter) {
    case "თბილისი":
      return 1;
    case "რუსთავი":
      return 2;
    case "ბათუმი":
      return 3;
    case "ქვიტირი":
      return 4;
    default:
      return 0; 
  }
}

getUniqueBranchNames(response: any[]): string[] {
  const uniqueBranchNames: string[] = [];
  const branchNameSet: Set<string> = new Set();

  response.forEach((item: { BranchName: string }) => {
    const branchName = item.BranchName.trim().toLowerCase();
    if (!branchNameSet.has(branchName)) {
      branchNameSet.add(branchName);
      uniqueBranchNames.push(branchName);
    }
  });

  return uniqueBranchNames;
}


onCityChange(event: Event): void {
  const selectedBranch = (event.target as HTMLSelectElement).value;
  console.log(this.centers);
  
  let selectedCenter = this.centers.filter(center => center.BranchName === selectedBranch);
  if (selectedCenter) {
    let availableTimes = selectedCenter.map(center => center.AvailableTime);
    console.log('Available times for', selectedBranch, ':', availableTimes);
    this.availableTimes = availableTimes;
  } else {
    console.log('Center not found for selected branch:', selectedBranch);
    this.availableTimes = [];
  }  
  console.log(selectedCenter);
}

generateAvailableTimes(event: Event): void {
  const  availableTimes = (event.target as HTMLSelectElement).value;
  console.log(this.availableTimes);
}


onSubmit(){
  this.submitted = true;
  if(this.reservationForm.invalid){
    return
  }
}

isFormValid(): boolean {
  return this.reservationForm.valid;
}

}
  
