import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleComponent } from './module/module.component';
import { AboutUsComponent } from './module/main-pg/about-us/about-us.component';
import { ReservationComponent } from './module/main-pg/reservation/reservation.component';
import { ServiceCentersComponent } from './module/main-pg/service-centers/service-centers.component';
import { CalculateComponent } from './module/main-pg/calculate/calculate.component';
import { NewsComponent } from './module/main-pg/news/news.component';
import { RegulationComponent } from './module/main-pg/regulation/regulation.component';
import { ContactComponent } from './module/main-pg/contact/contact.component';
import { RemainderComponent } from './module/main-pg/reservation/remainder/remainder.component';
import { CorrectModelComponent } from './module/main-pg/calculate/correct-model/correct-model.component';
import { PaymentComponent } from './module/main-pg/reservation/payment/payment.component';

const routes: Routes = [
  { path: '', component:ModuleComponent},
  { path: 'about-us', component:AboutUsComponent},
  { path: 'reservation', component:ReservationComponent},
  { path: 'service-centers', component:ServiceCentersComponent},
  { path: 'calculate-date', component:CalculateComponent},
  { path: 'news', component:NewsComponent},
  { path: 'regulation', component:RegulationComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'remainder', component:RemainderComponent},
  { path: 'calculator', component:CalculateComponent},
  { path: 'correct-model', component:CorrectModelComponent},
  { path: 'payment', component:PaymentComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
