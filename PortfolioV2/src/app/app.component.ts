import { DOCUMENT } from '@angular/common';
import { Component, HostListener, OnInit} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { endWith } from 'rxjs';


gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
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


