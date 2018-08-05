import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.component.html',
  styleUrls: ['./advertise.component.css']
})
export class AdvertiseComponent implements OnInit {
advertiseIMG = [
  {img:'http://www.kbtg.tech/th/HomeSlideImage/Job2.png'}, 
  {img:'http://www.kbtg.tech/th/HomeSlideImage/banner_kplus.jpg'},
  {img:'http://www.kbtg.tech/th/HomeSlideImage/Job1.png'},  
]
  constructor(private _http: HttpClient) {}

  ngOnInit() {
  
  }

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 3000,
    "infinite":true,
    "speed":600,
    
  };
  afterChange(e) {
    // console.log('afterChange');
  }
}
