import { Component } from '@angular/core';

@Component({
  selector: 'app-main-pg',
  templateUrl: './main-pg.component.html',
  styleUrls: ['./main-pg.component.scss']
})
export class MainPgComponent {
  timeSlots: string[] = [];
  selectedHour: string | null = null;


  constructor() {
    // Generate time slots from 10:00 to 19:00 in half-hour intervals
    for (let hour = 10; hour <= 19; hour++) {
      this.timeSlots.push(`${hour}:00`);
      this.timeSlots.push(`${hour}:30`);
    }
  }

  handleHourSelection(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log(`Selected meeting hour: ${selectedValue}`);
    this.selectedHour = selectedValue; // Set the selected meeting hour
  }
}
