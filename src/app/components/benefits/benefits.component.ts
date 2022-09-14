import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {

  formContratar: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formContratar = formBuilder.group({
      check: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  click(){
    this.router.navigate(['/home']);
  }

}
