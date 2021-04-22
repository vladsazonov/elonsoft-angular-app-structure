import { AfterViewInit, ChangeDetectorRef, Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'img[appLazyLoad]'
})
export class LazyLoadDirective implements AfterViewInit {
  @Input() public src: string;

  @HostBinding('attr.src') public srcAttr = null;

  constructor(private element: ElementRef, private detector: ChangeDetectorRef) {}

  public ngAfterViewInit() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
  }

  private canLazyLoad() {
    return window && 'IntersectionObserver' in window;
  }

  private lazyLoadImage() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.loadImage();
          obs.unobserve(this.element.nativeElement);
        }
      });
    });
    obs.observe(this.element.nativeElement);
  }

  private loadImage() {
    this.srcAttr = this.src;
    this.detector.detectChanges();
  }
}
