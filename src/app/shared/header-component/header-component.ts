import { Component, signal, inject } from '@angular/core';
import { TranslatePipe, TranslateDirective, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-component',
  imports: [TranslatePipe],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
  isMenuOpen = false;
  currentLanguage: string = 'de';
  private translate = inject(TranslateService);

  /**
   * Switches the application's translation language and updates the current language state.
   * @param language The language code to be used (e.g., 'en', 'de').
   */
  useLanguage(language: string): void {
    this.translate.use(language);
    this.currentLanguage = language;
  }

/**
   * Toggles the state of the mobile navigation menu and coordinates all related 
   * side effects, including body scrolling, mobile language layout, and the 
   * burger icon's frame-by-frame animation.
   * @public
   * @returns {void}
   */
  navClick(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.toggleBodyNoScroll();
    this.toggleMobileLanguage();
    this.handleBurgerIcon();
  }

  /**
   * Prevents or restores window scrolling on the body element
   * depending on whether the navigation menu is open.
   * @private
   * @returns {void}
   */
  private toggleBodyNoScroll(): void {
    const bodyRef = document.getElementById('body') as HTMLBodyElement;
    if (!bodyRef) return;
    bodyRef.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  /**
   * Toggles the visibility of the language selection wrapper on mobile devices
   * (viewports <= 640px) based on the menu's open state.
   * @private
   * @returns {void}
   */
  private toggleMobileLanguage(): void {
    if (window.innerWidth > 640) return;
    const languageDiv = document.getElementById('language') as HTMLElement;
    if (languageDiv) {
      languageDiv.style.display = this.isMenuOpen ? 'flex' : 'none';
    }
  }

  /**
   * Manages the frame-by-frame burger menu animation by swapping between 
   * 'open-animation' and 'close-animation' classes depending on the menu state.
   * @private
   * @returns {void}
   */
  private handleBurgerIcon(): void {
    const iconRef = document.getElementById('icon-container') as HTMLElement;
    if (!iconRef) return;

    if (this.isMenuOpen) {
      iconRef.classList.remove('close-animation');
      iconRef.classList.add('open-animation');
    } else {
      iconRef.classList.remove('open-animation');
      iconRef.classList.add('close-animation');
    }
  }
}
