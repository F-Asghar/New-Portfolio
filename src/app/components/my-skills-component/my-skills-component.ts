import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface Skill {
  name: string;
  icon: string;
  isAnimating?: boolean;
}


@Component({
  selector: 'app-my-skills-component',
  imports: [TranslatePipe],
  templateUrl: './my-skills-component.html',
  styleUrl: './my-skills-component.scss',
})

export class MySkillsComponent {
  isAnimEducation = false;

// In deiner Component-Klasse:
skills: Skill[] = [
  { name: 'Angular', icon: 'assets/icons/angular.png' },
  { name: 'TypeScript', icon: 'assets/icons/typescript.png' },
  { name: 'JavaScript', icon: 'assets/icons/javascript.png' },
  { name: 'HTML', icon: 'assets/icons/html.png' },
  { name: 'CSS', icon: 'assets/icons/css.png' },
  { name: 'Git', icon: 'assets/icons/git.png' },
  { name: 'REST-API', icon: 'assets/icons/rest-api.png' },
  { name: 'Scrum', icon: 'assets/icons/scrum.png' },
  { name: 'Supabase', icon: 'assets/icons/supabase.png' }
];

}
