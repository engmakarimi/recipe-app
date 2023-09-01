import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  inject,
} from '@angular/core';

@Directive({
  standalone: true,
})
export class HoverBackgroundColorDirective {
  el = inject(ElementRef);
  renderer = inject(Renderer2);
  @HostListener('mouseenter') onMouseEnter() {
    this.setGradientBackground('#fc9400', 'white');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setGradientBackground('white', 'white');
  }

  private setGradientBackground(
    primaryColor: string ,
    secondaryColor: string
  ) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background',
      `linear-gradient(to bottom, ${primaryColor}, ${secondaryColor})`
    );
  }
}
