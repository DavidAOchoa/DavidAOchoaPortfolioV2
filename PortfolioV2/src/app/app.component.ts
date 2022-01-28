import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { endWith } from 'rxjs';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html'
  template: `
  
  
  <app-header></app-header>
  <app-home></app-home>
  <app-about-me></app-about-me>
  <app-footer></app-footer>
 

  `,
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'portfoliov2';

}
