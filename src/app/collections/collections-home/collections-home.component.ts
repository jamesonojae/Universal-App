import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  datas = [
    {name: 'James', age: '24', job: 'designer'},
    {name: 'Bob', age: '22', job: 'programmer'},
    {name: 'Mark', age: '19', job: 'Waiter'},
  ]
  headers = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'},
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
