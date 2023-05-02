import {Component, OnInit} from '@angular/core';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit{

    constructor(private viewportScroller: ViewportScroller) { }

    ngOnInit(): void {

    }
  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }

}
