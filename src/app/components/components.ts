import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header-component/header-component';
import { AboveTheFoldComponent } from './above-the-fold-component/above-the-fold-component';
import { AboutMeComponent } from './about-me-component/about-me-component';
import { MySkillsComponent } from './my-skills-component/my-skills-component';
import { PortfolioComponent } from './portfolio-component/portfolio-component';
import { ReferenceComponent } from './reference-component/reference-component';
import { SayHiComponent } from './say-hi-component/say-hi-component';
import { FooterComponent } from '../shared/footer-component/footer-component';

@Component({
  selector: 'app-components',
  imports: [
    AboveTheFoldComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ReferenceComponent,
    SayHiComponent,
  ],
  templateUrl: './components.html',
  styleUrl: './components.scss',
})
export class Components {}
