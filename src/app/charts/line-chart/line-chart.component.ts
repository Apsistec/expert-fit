import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  chartOption: any;

  constructor() {}

  ngOnInit() {
    this.chartOption = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        type: 'value'
      },
      tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
        formatter: function (params) {
          return `<b>${params['name']}</b> : $ ${params['value']}`;
        }
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1430, 1550, 1200, 1650.145, 1680.189],
          type: 'line',
          areaStyle: {}
        }
      ]
    };
  }
}
