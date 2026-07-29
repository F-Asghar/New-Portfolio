import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-component',
  imports: [TranslatePipe],
  templateUrl: './portfolio-component.html',
  styleUrl: './portfolio-component.scss',
})
export class PortfolioComponent {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const imageWrapper = entry.target.closest('.project')?.querySelector('.project-immage-wrapper');

        if (entry.isIntersecting) {

          imageWrapper?.classList.add('show');

          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
          imageWrapper?.classList.remove('show');
        }
      });
    },
    { rootMargin: '0px 0px -120px 0px'},
  );

  ngAfterViewInit() {
    const projects = Array.from(document.querySelectorAll('.project-content-wrapper'));
    projects.forEach((element) => this.observer.observe(element));
  }
}
