import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ReactiveFormsModule} from "@angular/forms";
import { SwiperModule } from 'swiper/angular';
import { FormComponent } from './components/form/form.component';
import { FilterPipe } from './components/form/pipe/filter.pipe';
import { HomeComponent } from './components/home/home.component';
import { BenefitsComponent } from './components/benefits/benefits.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FilterPipe,
    HomeComponent,
    BenefitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SwiperModule
  ],
  providers: [
    FilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
