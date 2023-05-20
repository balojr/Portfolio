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
import {NgOptimizedImage} from "@angular/common";
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatDividerModule} from "@angular/material/divider";
import { HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  {path: '', component: LandingpageComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'nav', component: NavComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    BackgroundComponent,
    SkillsComponent,
    IntroComponent,
    NavComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // <-- include it under 'imports'
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    NgOptimizedImage,
    MatIconModule,
    MatButtonToggleModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDividerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
