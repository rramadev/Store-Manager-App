import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[mdCardBorder]'
})
export class ProductListMdCardDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.deleteBorder();
  }

  private setBorder() {
    this.el.nativeElement.style.boxShadow = '2px 2px 5px 5px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)';
    // this.el.nativeElement.style.borderRadius = '12px';
  }

  private deleteBorder() {
    this.el.nativeElement.style.boxShadow = '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)';
    // this.el.nativeElement.style.borderRadius = '2px';
  }
}
