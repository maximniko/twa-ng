import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration} from "chart.js";

@Component({
  selector: 'main-chart',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, BaseChartDirective],
  template: `
    <canvas baseChart
            [labels]="doughnutChartLabels"
            [datasets]="doughnutChartDatasets"
            [options]="doughnutChartOptions"
            [legend]="true"
            [type]="'doughnut'">
    </canvas>`,
})
export class ChartComponent implements OnInit {
  // Doughnut
  protected doughnutChartLabels: string[] = ['Category 1', 'Category 2', 'Category 3'];
  protected doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    {data: [350, 450, 100], label: 'Series A'},
  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    animation: {
      animateRotate: true,
      animateScale: true,
    },
    responsive: true,
  };

  ngOnInit() {
  }
}
