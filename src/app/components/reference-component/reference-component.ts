import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-reference-component',
  imports: [TranslatePipe],
  templateUrl: './reference-component.html',
  styleUrl: './reference-component.scss',
})
export class ReferenceComponent {

}
