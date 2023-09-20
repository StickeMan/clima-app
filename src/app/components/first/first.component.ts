import {Component} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  public title: string = 'Esto es el título de la primera página';
  public menu: string[] = ['Home', 'About', 'Contact', 'Settings', 'LogOut'];
  public firstNumber: number = 0;
  public secondNumber: number = 0;
  public totalsum: number = 0;
  public first1: number = 0;
  public second2: number = 0;
  public totalmulti: number = 0;
  public age: number = 0;
  public year: number = 2023;
  public calcAge: number = 0;

  changeListName(item: string) {
    const index = this.menu.indexOf(item);
    this.menu[index] = 'New Item';
  }

  calculateSum() {
    this.totalsum = this.firstNumber + this.secondNumber;
    // * return this.firstNumber + this.secondNumber;
  }

  calculateMulti() {
    this.totalmulti = this.first1 * this.second2;
  }

  calculateAge() {
    this.calcAge = this.year - this.age;
  }
}
