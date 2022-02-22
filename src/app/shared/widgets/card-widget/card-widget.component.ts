import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-card-widget',
  templateUrl: './card-widget.component.html',
  styleUrls: ['./card-widget.component.scss']
})
export class CardWidgetComponent implements OnInit {
  chartOptions: [];
  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },
      tooltip: {
          split: true,
          valueSuffix: ' millions'
      },
      credits: {
          enabled: false
      },
      exporting: {
          enabled: false
      },
      series: [
        {
          data: [71, 78, 39, 66]
        }
      ]
  };
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
          new Event('resize')
          ); }, 300);
    }
}
