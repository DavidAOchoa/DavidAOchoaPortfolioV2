import { Component, Input, OnInit } from '@angular/core';
import { ProjectPostCard } from './project-card.model';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Input() 
  data!: ProjectPostCard;
 
  constructor() { 
  }

  ngOnInit(): void {
   
  }

  
}
