import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-remainder',
  templateUrl: './remainder.component.html',
  styleUrls: ['./remainder.component.scss']
})

export class RemainderComponent implements OnInit {
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