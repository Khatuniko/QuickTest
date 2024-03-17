import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss']
})
export class CalculateComponent {
  inputControl = new FormControl('', [
    Validators.required,
    // Validators.pattern('^[A-Z]{2}[0-9]{3}[A-Z]{2}$')
    Validators.pattern('x')
    // validadators. mankanis nomeri tu ver modis beqidan
  ]);

}
