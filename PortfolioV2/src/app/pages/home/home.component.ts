import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { endWith } from 'rxjs';
import * as $ from "jquery";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('imageFirst', { static: true }) imageFirst: ElementRef<HTMLDivElement>;
  @ViewChild('imageSecond', { static: true }) imageSecond: ElementRef<HTMLDivElement>;

  constructor(@Inject(DOCUMENT) private document: Document) {}

 
  ngOnInit(): void {
    this.initialAnimations();
    // this.initScrollAnimations();    
  }

  initScrollAnimations(): void {
    gsap.to(this.imageFirst.nativeElement, {
      scrollTrigger: {
        trigger: this.imageFirst.nativeElement,
        scrub: true,
        start: '110% center' 
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.1,
      scale:  1,
      height: 700,
    });
    gsap.to(this.imageSecond.nativeElement, {
      scrollTrigger: {
        trigger: this.imageSecond.nativeElement,
        scrub: true,
        start: '80% center'
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.1,
      scale: 1,
      height: 700,
    });
    gsap.to(this.document.querySelector('.heading-1'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.heading-1'),
        scrub: 1.5,
        start: '150% center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      // color: '#1F1B22',
      duration: 1.5
    });
    gsap.to(this.document.querySelector('.paragraph'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.paragraph'),
        scrub: 1.5,
        start: '150% center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      color: '#1F1B22',
      duration: 1.5
    });
    gsap.to(this.document.querySelector('.btn--start'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.btn--start'),
        scrub: 1.5,
        start: '150% center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      color: '#1F1B22',
      duration: 1.5
    });

  }

  initialAnimations(): void {
    gsap.from(this.imageFirst.nativeElement, {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.5,
    });
    gsap.from(this.imageSecond.nativeElement, {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.6,
    });
    gsap.from(this.document.querySelector('.heading-1'), {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.6,
    });
    gsap.from(this.document.querySelector('.paragraph'), {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.6,
    });
    gsap.from(this.document.querySelector('.btn--start'), {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.6,
    });
  }


}
