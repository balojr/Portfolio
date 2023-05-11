import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
    sideImage = './assets/images/undraw_programming_re_kg9v.svg';
    sideImage2 = './assets/images/undraw_developer_activity_re_39tg.svg';
    sideImage3 = './assets/images/undraw_version_control_re_mg66.svg';
    constructor() { }
}
