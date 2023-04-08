import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import * as Gauge from 'canvas-gauges';

@Component({
  selector: 'app-apopup',
  templateUrl: './apopup.component.html',
  styleUrls: ['./apopup.component.css'],
})
export class ApopupComponent {
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
    this.elementRef.nativeElement.addEventListener('click', () => {
      this.onClick();
    });
  }
}
