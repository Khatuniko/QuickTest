import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent {
  submitted = false;
  // timeSlots: string[] = [];
  // // changeColor:string[] = [];
  // clickedButton: string | null = null;

  // constructor() {
  //   // Generate time slots from 10:00 to 19:00 in half-hour intervals
  //   for (let hour = 10; hour < 19; hour++) {
  //     this.timeSlots.push(`${hour}:00`);
  //     this.timeSlots.push(`${hour}:30`);
  //   }
  // }

  // handleClick(time: string) {
  //   console.log(`Button clicked for time: ${time}`);
  //   this.clickedButton = time; // Set the clicked button
  // }

  // isButtonClicked(time: string): boolean {
  //   return this.clickedButton === time;
  // }

  onSubmit(){
    this.submitted = true;
    // Swal.fire({
    //   title: "თქვენ წარმატებით დაჯავშნეთ ვიზიტი",
    //   icon: "success",
    //   confirmButtonColor: "#F7A23E",
    // })
    }

  reminderForm:any =  FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  
  ngOnInit(): void {
    this.reminderForm = this.formBuilder.group({
      mobile: ['', Validators.required], 
      period: ['', Validators.required] 
    });
  }

  successAlert() {
    if (this.reminderForm.valid) {
      Swal.fire({
        title: "გააქტიურებულია",
        confirmButtonColor: "#F7A23E",
        icon: "success"
      });
    }
  }

  isFormValid(): boolean {
    return this.reminderForm.valid;
  }
  }