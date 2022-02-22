import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-table-widget',
  templateUrl: './table-widget.component.html',
  styleUrls: ['./table-widget.component.scss']
})
export class TableWidgetComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: [];

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Total fruit consumption, grouped by gender'
      },

      xAxis: {
          categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
      },

      yAxis: {
          allowDecimals: false,
          min: 0,
          title: {
              text: 'Number of fruits'
          }
      },

      tooltip: {
          function() {
              return '<b>' + this.x + '</b><br/>' +
                  this.series.name + ': ' + this.y + '<br/>' +
                  'Total: ' + this.point.stackTotal;
          }
      },

      plotOptions: {
          column: {
              stacking: 'normal'
          }
      },

      series: [{
          name: 'John',
          data: [5, 3, 4, 7, 2],
          stack: 'male'
      }, {
          name: 'Joe',
          data: [3, 4, 4, 2, 5],
          stack: 'male'
      }, {
          name: 'Jane',
          data: [2, 5, 6, 2, 1],
          stack: 'female'
      }, {
          name: 'Janet',
          data: [3, 0, 4, 4, 3],
          stack: 'female'
      }]
  };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
          new Event('resize')
          ); }, 300);
  }
}
