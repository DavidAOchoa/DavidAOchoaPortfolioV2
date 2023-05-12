import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { CartonComponent } from './pages/carton/carton.component';
import { FooterComponent } from './pages/footer/footer.component';
import { FrenchPressComponent } from './pages/FrenchPress/FrenchPress.component';
import { GeminiComponent } from './pages/gemini/gemini.component';
import { HeaderComponent } from './pages/header/header.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    CartonComponent,
    FooterComponent,
    FrenchPressComponent,
    GeminiComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,  
    BrowserAnimationsModule, 
    MatSliderModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
