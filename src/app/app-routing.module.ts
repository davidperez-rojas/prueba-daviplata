import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from "./components/form/form.component";
import {HomeComponent} from "./components/home/home.component";
import {BenefitsComponent} from "./components/benefits/benefits.component";

const routes: Routes = [
  {
    path: '',
    component: FormComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'beneficios',
    component: BenefitsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
