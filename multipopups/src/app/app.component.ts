// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   title = 'multipopups';
//   showpopupA = false;
//   showpopupC = false;
//   showpopupB = false;

//   showPopupC() {
//     this.showpopupC = true;
//   }
//   showPopupB() {
//     this.showpopupB = true;
//   }
//   showPopupA() {
//     this.showpopupA = true;
//   }
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showPopupA = false;
  showPopupB = false;

  bringToFront(popupId: string) {
    const popups: NodeListOf<HTMLElement> = document.querySelectorAll('.popup-container');
    popups.forEach((popup) => {
      if (popup.getAttribute('data-popup-id') === popupId) {
        popup.style.zIndex = '10';
      } else {
        popup.style.zIndex = '1';
      }
    });
  }
}
