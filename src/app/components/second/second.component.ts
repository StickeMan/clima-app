import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  @Input()
  name: string = '';

  @Output() calcTax = new EventEmitter<number>();

  ivaNumber: number = 0;
  calculateIVA(price: number): void {
    const ivaAmount = price * 0.16;
    this.calcTax.emit(ivaAmount);
  }

  ngOnInit(): void {
  }
}
