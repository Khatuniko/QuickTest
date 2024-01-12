import { Component } from '@angular/core';

@Component({
  selector: 'app-regulation',
  templateUrl: './regulation.component.html',
  styleUrls: ['./regulation.component.scss']
})
export class RegulationComponent {
  downloadPdf37() {
    const pdfUrl = 'assets/reglament/new37.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'new-37.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

}
downloadPdf511() {
  const pdfUrl = 'assets/reglament/new511.pdf';
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'new-511.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

}
downloadPdf522() {
  const pdfUrl = 'assets/reglament/new522.pdf';
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'new-522.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

}
downloadPdf510() {
  const pdfUrl = 'assets/reglament/new510.pdf';
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'new-510.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

}
}