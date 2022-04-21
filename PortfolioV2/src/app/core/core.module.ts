import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FrenchPressComponent } from './FrenchPress/FrenchPress.component';
import { GeminiComponent } from './gemini/gemini.component';
import { CartonComponent } from './carton/carton.component';




@NgModule({
  declarations: [
    HeaderComponent,
    AboutMeComponent,
    FooterComponent,
    FrenchPressComponent,
    GeminiComponent,
    CartonComponent
  ],
  imports: [
    CommonModule, MatCardModule, MatButtonModule, FlexLayoutModule
  ],
  exports: [
    HeaderComponent,
    AboutMeComponent,
    FooterComponent,
   FrenchPressComponent,
   GeminiComponent,
   CartonComponent
  ]
})
export class CoreModule { }
