import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FilterPipe} from "./pipe/filter.pipe";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formData: FormGroup;
  city: any;
  listCity: any = [];
  citys: any = [
    'Armenia',
    'Armero',
    'Bogotá',
    'Bucaramanga',
    'Cordoba',
    'Calarca',
    'Duitama'
  ];
  showOption = false;
  mobNumberPattern = "^((\\+57-?)|0)?[0-9]{10}$";

  constructor(
    private formBuilder: FormBuilder,
    private filterPipe: FilterPipe,
    private router: Router
  ) {
    this.formData = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      numberDocument: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      moreIndications: new FormControl(''),
      phone: new FormControl('', [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)])
    })
    this.formData.get('city')?.valueChanges.subscribe((value : any) =>{
      if (value.length > 1){
        this.showOption = true;
      } else {
        this.showOption = false;
      }
      this.listCity = this.filterPipe.transform(value, this.citys);
    })
  }

  ngOnInit(): void {
  }

  clickCity(input: any, city: any){
    input.value = city;
    this.formData.value.city = city;
    this.showOption = false;
  }

  sendData(form: any){
    console.log(form)
    this.router.navigate(['/home']);
    localStorage.setItem('login', 'Usuario registrado')
  }

}
