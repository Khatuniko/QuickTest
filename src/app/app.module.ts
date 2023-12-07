import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleComponent } from './module/module.component';
import { AboutUsComponent } from './module/main-pg/about-us/about-us.component';
import { HeaderComponent } from './module/main-pg/header/header.component';
import { FooterComponent } from './module/main-pg/footer/footer.component';
import { ContactComponent } from './module/main-pg/contact/contact.component';
import { ReservationComponent } from './module/main-pg/reservation/reservation.component';
import { NewsComponent } from './module/main-pg/news/news.component';
import { ServiceCentersComponent } from './module/main-pg/service-centers/service-centers.component';
import { CalculateComponent } from './module/main-pg/calculate/calculate.component';
import { RegulationComponent } from './module/main-pg/regulation/regulation.component';
import { MainPgComponent } from './module/main-pg/main-pg.component';
import { LogoComponent } from './module/main-pg/header/logo/logo.component';
import { LanguagesComponent } from './module/main-pg/header/languages/languages.component';

@NgModule({
  declarations: [
    AppComponent,
    ModuleComponent,
    AboutUsComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ReservationComponent,
    NewsComponent,
    ServiceCentersComponent,
    CalculateComponent,
    RegulationComponent,
    MainPgComponent,
    LogoComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
