import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is my test app';
  months = ['January', 'Feburary', 'March', 'April', 'May',
  'June', 'July', 'August', 'September',
  'October', 'November', 'December'];
  isavailable = true;
  btnClick(event) {
    alert('You clicked on me');
  }
  changeMonths() {
    alert('Month hasbeeen changed');
  }
}
