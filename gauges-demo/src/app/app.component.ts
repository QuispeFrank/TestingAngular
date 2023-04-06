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
      width: 200,
      height: 200,
      minValue: 0,
      maxValue: 100,
      majorTicks: ['0', '20', '40', '60', '80', '100'],
      minorTicks: 10,
      value: 50,
      colorBarProgress: '#0f0',
    });

    gauge.draw();
  }
}
