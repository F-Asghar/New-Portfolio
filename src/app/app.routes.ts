import { Routes } from '@angular/router';
import { Components } from './components/components';
import { LegalNoticeComponent } from './components/legal-notice-component/legal-notice-component';
import { PrivacyPolicyComponent } from './components/privacy-policy-component/privacy-policy-component';
import { FooterComponent } from './shared/footer-component/footer-component';

export const routes: Routes = [
{path:'', component:Components},
{path:'legal-notice', component:LegalNoticeComponent},
{path:'privacy-policy', component:PrivacyPolicyComponent},
{path:'footer', component:FooterComponent}
];

