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
import { RemainderComponent } from './module/main-pg/reservation/remainder/remainder.component';
import { MapComponent } from './module/main-pg/service-centers/map/map.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


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
    LanguagesComponent,
    RemainderComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    // FontAwesomeModule,
    // AngularFontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    // RouterModule.forRoot(routes),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}


export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}