import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration, Color} from "chart.js";
import {Transaction} from "../../../../../domains/transactions/interfaces/transaction";

@Component({
  selector: 'chart-transactions-doughnut',
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
export class DoughnutComponent implements OnInit {
  @Input() transactions: Transaction[] = []
  protected doughnutChartLabels: string[] = [];
  protected doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    animation: {
      animateRotate: true,
      animateScale: true,
    },
    responsive: true,
  };

  ngOnInit() {
    this.initChartData()
  }

  private initChartData() {
    const chartData: ChartData = this.transactions.reduce<ChartData>(
      (previousValue: ChartData, currentValue: Transaction) => {
        previousValue.labels.push(currentValue.category.title)
        previousValue.backgroundColors.push(currentValue.category.color)
        previousValue.data.push(currentValue.total)
        return previousValue
      }, <ChartData>{
        labels: [],
        backgroundColors: [],
        data: [],
      }
    )
    this.doughnutChartLabels.push(...chartData.labels)
    this.doughnutChartDatasets.push({
        data: chartData.data,
        label: 'sum',
        borderWidth: 1,
        // borderJoinStyle: 'round',
        backgroundColor: chartData.backgroundColors,
      }
    )
  }
}

interface ChartData {
  labels: string[]
  data: number[]
  backgroundColors: Color[]
}
