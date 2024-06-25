import { Directive, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Subscription, filter, fromEvent, map, merge, switchMap, timer, of } from 'rxjs';

@Directive({
  selector: '[longPress]',
  standalone: true,
  outputs: ['mouseLongPress'],
})
export class LongPressDirective implements OnDestroy {

  private eventSubscriber: Subscription;
  threshold = 1000;

  @Output()
  mouseLongPress = new EventEmitter();

  constructor(
    private elementRef: ElementRef
  ) {
    const mouseDown = fromEvent<MouseEvent>(
      elementRef.nativeElement,
      'mousedown'
    ).pipe(
      filter((event) => event.button == 0),
      map((event) => true),
    );
    const touchstart = fromEvent(elementRef.nativeElement, 'touchstart').pipe(
      map(() => true)
    );
    const touchend = fromEvent(elementRef.nativeElement, 'touchend').pipe(
      map(() => false)
    );
    const mouseup = fromEvent<MouseEvent>(window, 'mouseup').pipe(
      filter((event) => event.button == 0),
      map(() => false)
    );
    this.eventSubscriber = merge(mouseDown, mouseup, touchstart, touchend)
      .pipe(
        switchMap((state) => (state ? timer(this.threshold, 100) : of(null))),
        map((value) => value)
      )
      .subscribe(() => {this.mouseLongPress.emit()});
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventSubscriber.unsubscribe();
    }
  }

}
