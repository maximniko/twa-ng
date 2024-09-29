import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CounterService} from "./counter.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './counter.component.html',
})
export class CounterComponent implements OnInit {
  @Output() count = new EventEmitter<number>()
  @Input() startCount: number = 1
  @Input() step: number = 1
  @Input() minValue: number = 1
  @Input() maxValue: number = 1

  constructor(private counter: CounterService) {
  }

  ngOnInit() {
    this.counter.count = this.startCount
  }

  value(): number {
    return this.counter.count
  }

  increment() {
    if (this.canIncrement()) {
      this.counter.count += this.step
      this.count.emit(this.counter.count)
    }
  }

  decrement() {
    if (this.canDecrement()) {
      this.counter.count -= this.step
      this.count.emit(this.counter.count)
    }
  }

  canIncrement(): boolean {
    return this.maxValue > this.counter.count
  }

  canDecrement(): boolean {
    return this.minValue < this.counter.count
  }
}
