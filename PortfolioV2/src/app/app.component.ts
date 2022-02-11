import { DOCUMENT } from '@angular/common';
import { Component, HostListener, OnInit} from '@angular/core';
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
  public innerWidth: any;
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }
  title = 'portfoliov2';

}


