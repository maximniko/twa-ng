import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration, Color} from "chart.js";
import {Transaction} from "../../../../../domains/transactions/interfaces/transaction";
import {getColor} from "../../../../../../../common/interfaces/colors";

@Component({
  selector: 'chart-transactions-doughnut',
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
  @Input() transactions: Transaction[] = []
  protected doughnutChartLabels: string[] = [];
  protected doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [];
  protected doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
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

  ngOnInit() {
    this.initChartData()
  }

  private initChartData() {
    const chartDate = this.chartDate
    this.doughnutChartLabels.push(...chartDate.labels)
    this.doughnutChartDatasets.push({
        data: chartDate.data,
        label: 'sum',
        borderWidth: 1,
        backgroundColor: chartDate.backgroundColors,
      }
    )
  }

  private get chartDate(): ChartData {
    const uniqueData: UniqueData = this.transactions.reduce<UniqueData>(
      (acc: UniqueData, currentValue: Transaction) => {
        if (acc[currentValue.tag.id]) {
          acc[currentValue.tag.id].total += currentValue.total
        } else {
          acc[currentValue.tag.id] = {
            id: currentValue.tag.id,
            title: currentValue.tag.title,
            total: currentValue.total,
          }
        }
        return acc
      }, {})
    const tagIds: string[] = Object.keys(uniqueData)

    const tagCharts: TagTotal[] = tagIds.reduce<TagTotal[]>(
      (acc: TagTotal[], id: string) => {
        acc.push(uniqueData[id])
        return acc
      }, []).sort((a, b) => a.total > b.total ? -1 : 1)

    const maxIndex = 5 // TODO move to setting
    return tagCharts.reduce<ChartData>(
      (acc: ChartData, value: TagTotal, currentIndex: number) => {
        if (currentIndex < maxIndex) {
          acc.labels.push(value.title)
          acc.backgroundColors.push(getColor(value.id))
          acc.data.push(value.total)
        } else {
          acc.labels[maxIndex] = 'Others'
          acc.backgroundColors.push('#999')
          acc.data[maxIndex] = (acc.data[maxIndex] ?? 0) + value.total
        }
        return acc
      }, <ChartData>{
        labels: [],
        backgroundColors: [],
        data: [],
      })
  }
}

interface UniqueData {
  [key: string]: TagTotal
}

interface TagTotal {
  id: number
  title: string
  total: number
}

interface ChartData {
  labels: string[]
  data: number[]
  backgroundColors: Color[]
}
