import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SwiperOptions} from "swiper";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    scrollbar: { draggable: true },
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  exit(){
    this.router.navigate(['/']);
  }

}
