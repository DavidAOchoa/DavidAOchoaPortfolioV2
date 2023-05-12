import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { endWith } from 'rxjs';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @ViewChild('secondSection', { static: true }) secondSection: ElementRef<HTMLDivElement>;

   constructor(@Inject(DOCUMENT) private document: Document) {}
  
  ngOnInit(): void {
    this.initialAnimations();
    this.initScrollAnimations();    
  }

  initialAnimations(): void {
    gsap.to(this.document.querySelector('.footer'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.footer'),
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

  initScrollAnimations(): void {

  }

}
