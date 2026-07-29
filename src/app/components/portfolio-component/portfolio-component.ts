import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

export interface Project {
  title: string;
  tech: string;
  descriptionKey: string;
  githubUrl: string;
  liveUrl: string;
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-portfolio-component',
  imports: [TranslatePipe],
  templateUrl: './portfolio-component.html',
  styleUrl: './portfolio-component.scss',
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Join',
      tech: 'Angular | TypeScript | HTML | CSS | Supabase',
      descriptionKey: 'portfolio.join',
      githubUrl: 'https://github.com/F-Asghar/join.git',
      liveUrl: 'https://F-Asghar.github.io/join/',
      imageSrc: 'assets/img/join.png',
      imageAlt: 'Join',
    },
    {
      title: 'El Pollo Loco',
      tech: 'HTML | CSS | JavaScript',
      descriptionKey: 'portfolio.el-pollo-loco',
      githubUrl: 'https://github.com/F-Asghar/El-Pollo-Loco.git',
      liveUrl: 'https://F-Asghar.github.io/El-Pollo-Loco/',
      imageSrc: 'assets/img/el-pollo-loco.png',
      imageAlt: 'El Pollo Loco',
    },
    {
      title: 'Pokédex',
      tech: 'HTML | CSS | REST-API | JavaScript',
      descriptionKey: 'portfolio.pokedex',
      githubUrl: 'https://github.com/F-Asghar/Pokedex.git',
      liveUrl: 'https://F-Asghar.github.io/Pokedex/',
      imageSrc: 'assets/img/pokedex.png',
      imageAlt: 'Pokédex',
    },
  ];

  formatNumber(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const imageWrapper = entry.target
          .closest('.project')
          ?.querySelector('.project-immage-wrapper');

        if (entry.isIntersecting) {
          imageWrapper?.classList.add('show');

          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
          imageWrapper?.classList.remove('show');
        }
      });
    },
    { rootMargin: '0px 0px -120px 0px' },
  );

  ngAfterViewInit() {
    const projects = Array.from(document.querySelectorAll('.project-content-wrapper'));
    projects.forEach((element) => this.observer.observe(element));
  }
}
