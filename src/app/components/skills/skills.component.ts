import {AfterViewInit, Component} from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements  AfterViewInit{
  activeDiv = 1;

  constructor() {
  }
  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 3.5,
      spaceBetween: 25,
      loop: true,
      speed: 1888,
      simulateTouch: false,
      autoplay: {
        delay: 1800,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      on: {
        realIndexChange: () => {
          // Handle real index change event here
        },
        init: () => {
          // Handle swiper init event here
        },
      },
    });
  }
}
