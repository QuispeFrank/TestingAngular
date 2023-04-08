import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pop-a',
  templateUrl: './pop-a.component.html',
  styleUrls: ['./pop-a.component.css']
})
export class PopAComponent {
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
