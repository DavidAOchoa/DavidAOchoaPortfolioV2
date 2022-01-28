import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { endWith } from 'rxjs';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  @ViewChild('secondSection', { static: true }) secondSection: ElementRef<HTMLDivElement>;

   constructor(@Inject(DOCUMENT) private document: Document) {}
  
  ngOnInit(): void {
    this.initialAnimations();
    this.initScrollAnimations();    
  }

  initScrollAnimations(): void {
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
        gsap.to(this.document.querySelector('.kurtHeader-4'), {
          scrollTrigger: {
            trigger: this.document.querySelector('.kurtHeader-4'),
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

  }


}
