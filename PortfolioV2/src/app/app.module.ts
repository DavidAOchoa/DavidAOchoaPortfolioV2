import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    
  
  ],
  imports: [
    BrowserModule, CoreModule, BrowserAnimationsModule, MatSliderModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
