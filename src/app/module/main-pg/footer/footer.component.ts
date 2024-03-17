import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
goToFacebook(): void {
  window.open('https://www.facebook.com/VehicleInspectionCentre', '_blank')
}

goToInstagram(): void {
  window.open('https://www.instagram.com/quicktest.ge/', '_blank')
}

goToLinkedin(): void {
  window.open('https://www.linkedin.com/company/quicktestge/about/', '_blank');

}
}