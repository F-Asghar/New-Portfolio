import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold-component',
  imports: [TranslatePipe],
  templateUrl: './above-the-fold-component.html',
  styleUrl: './above-the-fold-component.scss',
})
export class AboveTheFoldComponent {

}
