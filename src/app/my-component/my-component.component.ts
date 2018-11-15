import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import {UsersModel} from '../models/usersModel';
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  fruits = ['Apple', 'Orange', 'Guava', 'Grapes', 'Pappaya',
  'Nuts', 'Lessy', 'Mango', 'Pineapple',
  'Cheri', 'Sabargilly', 'Lemon'];
  todayDate;
  usersList;
  constructor(private myservice: MyserviceService) { }
  ngOnInit() {
    this.todayDate = this.myservice.getTodaysDate();
    console.log('Test', this.myservice.getRemoteData());
    this.myservice.getRemoteData().subscribe((data) =>  this.usersList = data);
  }
  btnClick() {
    alert('Hai template');
  }

}
