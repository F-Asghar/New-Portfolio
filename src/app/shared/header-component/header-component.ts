import { Component, signal, inject } from '@angular/core';
import { TranslatePipe, TranslateDirective, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-component',
  imports: [TranslatePipe],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
  isOpen = false;
  currentLanguage: string = 'de';
  private translate = inject(TranslateService);

  /**
   * Toggles the menu state and updates the dialog visibility.
   */
  navClick(): void {
    this.isOpen = !this.isOpen;
    this.toggleDialog();
  }

  /**
   * Manages the visibility of the menu dialog and handles associated UI adjustments
   * such as body scrolling and language selector visibility.
   */
  toggleDialog() {
    const dialogRef = document.getElementById('dialog-menu') as HTMLDialogElement;
    const languageDiv = document.getElementById('language');
    const bodyRef = document.getElementById('body');

    if (dialogRef.open) {
      dialogRef.close();
      this.isOpen = false;
      if (languageDiv) {
        languageDiv.style.display = '';
      }
      if (bodyRef) {
        bodyRef.style.overflow = '';
      }
    } else {
      dialogRef.show();
      if (bodyRef) {
        bodyRef.style.overflow = 'hidden';
      }
      if (window.innerWidth <= 640 && languageDiv) {
        languageDiv.style.display = 'flex';
      }
    }
  }

  /**
   * Switches the application's translation language and updates the current language state.
   * @param language The language code to be used (e.g., 'en', 'de').
   */
  useLanguage(language: string): void {
    this.translate.use(language);
    this.currentLanguage = language;
  }
}
