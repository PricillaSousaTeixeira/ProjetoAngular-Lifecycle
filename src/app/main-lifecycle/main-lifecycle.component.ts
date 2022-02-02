import { Component, OnInit } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-main-lifecycle',
  templateUrl: './main-lifecycle.component.html',
  styleUrls: ['./main-lifecycle.component.css']
})
export class MainLifecycleComponent implements OnInit {
  foods: string[] = ["Rice", "Beans", "pizza"];
  clients: Client[] = [];
  name: string ;
  age: number ;
  food: string;
  editClient: Client = null;

  constructor() { }

  ngOnInit(): void {
  }
save(){
  if(this.editClient==null){
  this.clients.push({name: this.name, age: this.age, food: this.food})
}

}
}