import { Component } from '@angular/core';
import { Invoice } from '../_Models/Invoice';

@Component({
  selector: 'app-invoice-list-component',
  templateUrl: './invoice-list-component.component.html',
  styleUrls: ['./invoice-list-component.component.css']
})
export class InvoiceListComponentComponent {

  list:Invoice[]=[
    new Invoice(1,120, 10, "12/12/2021",true),
    new Invoice(2,1020, 90, "22/11/2020",true),
    new Invoice(3,260, 30, "18/10/2020",false),
    new Invoice(4,450, 40, "14/12/2020",true),
    ]

}
