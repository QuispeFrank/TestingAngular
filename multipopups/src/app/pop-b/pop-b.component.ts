import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pop-b',
  templateUrl: './pop-b.component.html',
  styleUrls: ['./pop-b.component.css']
})
export class PopBComponent {
  constructor(private elementRef: ElementRef) {}

  bringToFront() {
    const popups: NodeListOf<HTMLElement> = document.querySelectorAll('.popup-container');
    popups.forEach((popup) => {
      if (popup === this.elementRef.nativeElement.children[0]) {
        popup.style.zIndex = '10';
      } else {
        popup.style.zIndex = '1';
      }
    });
  }
}
