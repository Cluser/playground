import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlightDirective]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  ngOnInit() {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
