import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ReservationService } from './bookingservices/reservation.service';
import { TranslateService } from '@ngx-translate/core';



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


constructor(private translateService: TranslateService,private formBuilder: FormBuilder,private router: Router, private reservationService: ReservationService) {
  this.reservationForm = this.formBuilder.group({
    carNumber: ['', Validators.required],
    mobileNumber: ['', Validators.required],
    date: ['', Validators.required],
    city: ['', Validators.required],
    checkbox: [false, Validators.requiredTrue],
    meetingTime:['', Validators.required]
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
    availableTimes = availableTimes.map(time => time.split('T')[1]);
    this.availableTimes = availableTimes;
  } else {
    console.log('Center not found for selected branch:', selectedBranch);
    this.availableTimes = [];
  }
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
}
  
