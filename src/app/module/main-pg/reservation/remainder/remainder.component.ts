import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-remainder',
  templateUrl: './remainder.component.html',
  styleUrls: ['./remainder.component.scss']
})

export class RemainderComponent implements OnInit {
  reminderForm:any =  FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  
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
        icon: "success",
        confirmButtonColor: "#F7A23E",
      }).then((result) => {
        if (result.isConfirmed) {
         this.router.navigate(['/']);
        }
      });
    }
  }

  

  isFormValid(): boolean {
    return this.reminderForm.valid;
  }
}