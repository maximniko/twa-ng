import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration, Color} from "chart.js";
import {ChartCategory} from "../../../../../domains/charts/interfaces/chart-category";
import {Localisation} from "../../../../../../../common/services/localisation";

@Component({
  selector: 'chart-categories-doughnut',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
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
  @Input() chartCategories: ChartCategory[] = []
  protected doughnutChartLabels: string[] = [];
  protected doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [];
  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    animation: {
      animateRotate: true,
      animateScale: true,
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 16,
          }
        }
      }
    },
    responsive: true,
  };

  constructor(
    protected localisation: Localisation,
  ) {
  }
  ngOnInit() {
    this.initChartData()
  }

  private initChartData() {
    const maxIndex = 5 // TODO move to setting
    const chartData: ChartData = this.chartCategories.reduce<ChartData>(
      (acc: ChartData, value: ChartCategory, currentIndex: number) => {
        if (currentIndex < maxIndex) {
          acc.labels.push(value.category.title)
          acc.backgroundColors.push(value.color)
          acc.data.push(value.total)
        } else {
          acc.labels[maxIndex] = this.localisation.t.Others ?? 'Others'
          acc.backgroundColors.push('#999')
          acc.data[maxIndex] = (acc.data[maxIndex] ?? 0) + value.total
        }
        return acc
      }, <ChartData>{
        labels: [],
        backgroundColors: [],
        data: [],
      }
    )
    this.doughnutChartLabels.push(...chartData.labels)
    this.doughnutChartDatasets.push({
        data: chartData.data,
        label: this.localisation.t.sum ?? 'sum',
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
