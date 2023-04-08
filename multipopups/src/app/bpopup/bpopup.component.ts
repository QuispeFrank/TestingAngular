import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import * as Gauge from 'canvas-gauges';

@Component({
  selector: 'app-bpopup',
  templateUrl: './bpopup.component.html',
  styleUrls: ['./bpopup.component.css'],
})
export class BpopupComponent {
  @Output() close = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  onClick() {
    const popups: NodeListOf<HTMLElement> =
      document.querySelectorAll('.container');
    popups.forEach((popup) => {
      if (popup === this.elementRef.nativeElement) {
        this.elementRef.nativeElement.style.zIndex = '10';
      } else {
        popup.style.zIndex = '1';
      }
    });
  }

  closePopup() {
    this.close.emit();
  }

  ngOnInit(): void {
    const gaugeB = new Gauge.LinearGauge({
      renderTo: 'canvasIdB',
      width: 150,
      height: 150,
      minValue: 100,
      maxValue: 120,
      majorTicks: ['100', '105', '110', '115', '120'],
      minorTicks: 5,
      value: 110,
      colorBarProgress: '#0f0',
    });

    gaugeB.draw();

    this.elementRef.nativeElement.addEventListener('click', () => {
      this.onClick();
    });
  }
}
