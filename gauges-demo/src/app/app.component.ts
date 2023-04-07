import { Component } from '@angular/core';
import * as Gauge from 'canvas-gauges';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gauges-demo';

  ngOnInit(): void {
    const gauge = new Gauge.LinearGauge({
      renderTo: 'canvasId',
      width: 150,
      height: 150,
      minValue: 100,
      maxValue: 120,
      majorTicks: ['100', '105', '110', '115', '120'],
      minorTicks: 5,
      value: 110,
      colorBarProgress: '#0f0',
    });

    gauge.draw();
  }
}
