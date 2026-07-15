import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-privacy-policy-component',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './privacy-policy-component.html',
  styleUrl: './privacy-policy-component.scss',
})
export class PrivacyPolicyComponent {

}
