import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperiencePageComponent } from './components/experience-page/experience-page.component';
import { ExperienceBoxComponent } from './components/experience-page/experience-box/experience-box.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutMeComponent } from './components/about-me/about-me.component';

@NgModule({
  declarations: [AppComponent, ExperiencePageComponent, ExperienceBoxComponent, AboutMeComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
