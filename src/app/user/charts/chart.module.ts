// Import bar charts, all with Chart suffix
import { BarChart, LineChart } from 'echarts/charts';
import { GridComponent, TitleComponent, TooltipComponent } from 'echarts/components';
// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core';
// Import the Canvas renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import { CanvasRenderer } from 'echarts/renderers';
import { NgxEchartsModule } from 'ngx-echarts';

import { NgModule } from '@angular/core';

import { LineChartComponent } from './line-chart/line-chart.component';

// import 'echarts/theme/macarons.js';

echarts.use([TitleComponent, TooltipComponent, GridComponent, BarChart, LineChart, CanvasRenderer]);

@NgModule({
  declarations: [LineChartComponent],
  entryComponents: [],
  imports: [NgxEchartsModule.forRoot({ echarts })],
  providers: [],
  bootstrap: [],
  exports: []
})
export class LineChartModule {}
