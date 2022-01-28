import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { endWith } from 'rxjs';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  //title = 'webapp';

  @ViewChild('secondSection', { static: true }) secondSection: ElementRef<HTMLDivElement>;
  @ViewChild('menu', { static: true }) menu: ElementRef<HTMLDivElement>;
  @ViewChild('menuSecond', { static: true }) menuSecond: ElementRef<HTMLDivElement>;
  @ViewChild('imageFirst', { static: true }) imageFirst: ElementRef<HTMLDivElement>;
  @ViewChild('imageSecond', { static: true }) imageSecond: ElementRef<HTMLDivElement>;
  
  constructor(@Inject(DOCUMENT) private document: Document) {}
  
  ngOnInit(): void {
    this.initialAnimations();
    this.initScrollAnimations();    
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
      color: '#1F1B22',
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
    gsap.to(this.document.querySelector('.btn'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.btn'),
        scrub: 1.5,
        start: '150% center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      color: '#1F1B22',
      duration: 1.5
    });

    gsap.to(this.document.querySelector('#buy'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#buy'),
        scrub: 1.5,
        toggleClass: 'active',
        start: 'top center',
        end: "+= 200"
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
    gsap.to(this.document.querySelector('#about'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#about'),
        scrub: 1.5,
        toggleClass: 'active',
        start: 'top center',
        end: "+= 200"
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
    gsap.to(this.document.querySelector('.info-1__visual img'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.info-1__visual img'),
        scrub: 1.5,
        toggleClass: 'active',
        start: 'top center',
        end: "+= 200"
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
    gsap.to(this.document.querySelector('.quote'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.quote'),
        scrub: 1.5,
        toggleClass: 'active',
        start: 'top center',
        end: "+= 200"
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
    gsap.to(this.document.querySelector('.info-1__text .heading-3'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.info-1__text .heading-3'),
        scrub: 1.5,
        toggleClass: 'active',
        start: 'top center',
        end: "+= 200"
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
    gsap.to(this.document.querySelector('.info-1__text .paragraph'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.info-1__text .paragraph'),
        scrub: 1.5,
        toggleClass: 'active',
        start: 'top center',
        end: "+= 200"
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
    gsap.to(this.document.querySelector('.info-1__text .btn__learn'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.info-1__text .btn__learn'),
        scrub: 1.5,
        toggleClass: 'active',
        start: 'top center',
        end: "+= 200"
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
  }

  initialAnimations(): void {
    gsap.from(this.menu.nativeElement.childNodes, {
      duration: 0.5,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      delay: 0.5,
    });
    gsap.from(this.menuSecond.nativeElement.childNodes, {
      duration: 0.8,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      delay: 0.5,
    });
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
    gsap.from(this.document.querySelector('.btn'), {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.6,
    });
  }
}
