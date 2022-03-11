import { DOCUMENT } from '@angular/common';
import { Component, HostListener, OnInit} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { endWith } from 'rxjs';
import { ProjectPostCard } from './core/experience/project-card.model';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html'
  template: `
  
  
  <app-header></app-header>
  <app-home></app-home>
  <app-about-me></app-about-me>
  <!-- <app-experience *ngFor="let post of posts" [data]="post"></app-experience> -->
  <app-footer></app-footer>
 

  `,
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit{
  public innerWidth: any;

  posts: ProjectPostCard[] = [
    {
      mainImageUrl: '../assets/images/SkullFace.jpg',
      subtitle: 'Dog Breed',
      title: 'Shiba Inu',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'
    },
    {
      mainImageUrl: '../assets/images/SkullFace.jpg',
      subtitle: 'Dog Breed',
      title: 'Shiba Inu',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'
    },
  ];



  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }
  title = 'portfoliov2';

}


