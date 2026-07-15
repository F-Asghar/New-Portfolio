import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills-component',
  imports: [TranslatePipe],
  templateUrl: './my-skills-component.html',
  styleUrl: './my-skills-component.scss',
})

export class MySkillsComponent {
  isAnimAngular = false;
  isAnimTs = false;
  isAnimJs = false;
  isAnimHtml = false;
  isAnimCss = false;
  isAnimGit = false;
  isAnimRest = false;
  isAnimEdu = false;
}
