import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- import required BrowserAnimationsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { BackgroundComponent } from './components/background/background.component';
import { SkillsComponent } from './components/skills/skills.component';
import {RouterModule, Routes} from "@angular/router";
import { IntroComponent } from './components/intro/intro.component';
import { NavComponent } from './components/nav/nav.component';

const appRoutes: Routes = [
  {path: '', component: LandingpageComponent},
  {path: 'skills', component: SkillsComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    BackgroundComponent,
    SkillsComponent,
    IntroComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // <-- include it under 'imports'
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
