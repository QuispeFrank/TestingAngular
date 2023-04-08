import { Component, ElementRef } from '@angular/core';
import * as Gauge from 'canvas-gauges';

@Component({
  selector: 'app-pop-a',
  templateUrl: './pop-a.component.html',
  styleUrls: ['./pop-a.component.css'],
})
export class PopAComponent {
  constructor(private elementRef: ElementRef) {}

  bringToFront() {
    const popups: NodeListOf<HTMLElement> =
      document.querySelectorAll('.popup-container');
    popups.forEach((popup) => {
      if (popup === this.elementRef.nativeElement.children[0]) {
        popup.style.zIndex = '10';
      } else {
        popup.style.zIndex = '1';
      }
    });
  }

  ngOnInit(): void {
    const gaugeA = new Gauge.LinearGauge({
      renderTo: 'canvasIdA',
      width: 150,
      height: 150,
      minValue: 100,
      maxValue: 120,
      majorTicks: ['100', '105', '110', '115', '120'],
      minorTicks: 5,
      value: 110,
      colorBarProgress: '#0f0',
    });

    gaugeA.draw();
  }
}
