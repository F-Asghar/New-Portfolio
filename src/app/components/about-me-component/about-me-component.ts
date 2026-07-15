import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me-component',
  imports: [TranslatePipe],
  templateUrl: './about-me-component.html',
  styleUrl: './about-me-component.scss',
})
export class AboutMeComponent {

}
