import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../services/sales/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  sale: any = {
   client: {name: "", lastName: "", email: ""},
   address: {street:"", city: "", zip: ""},
   items: [],
 };
  constructor() { }

  ngOnInit() {
  }

}
