import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';
import { ExperienceComponent } from './experience/experience.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [
    HeaderComponent,
    AboutMeComponent,
    FooterComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule, MatCardModule, MatButtonModule, FlexLayoutModule
  ],
  exports: [
    HeaderComponent,
    AboutMeComponent,
    FooterComponent,
    ExperienceComponent
  ]
})
export class CoreModule { }
