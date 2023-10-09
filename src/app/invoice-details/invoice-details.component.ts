import { Component, OnInit } from '@angular/core';
import { Invoice } from '../_Models/Invoice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css']
})

export class InvoiceDetailsComponent implements OnInit {
  id:String|null
  invoice:Invoice
  active:boolean
  list:Invoice[]=[
    new Invoice(1,120, 10, "12/12/2021",true),
    new Invoice(2,1020, 90, "22/11/2020",true),
    new Invoice(3,260, 30, "18/10/2020",false),
    new Invoice(4,450, 40, "14/12/2020",true),
    ]

    constructor(private router:ActivatedRoute,private route:Router){}

    ngOnInit(): void {
      this.router.queryParams.subscribe(params => {
       
        this.id = params['id'];
        this.active = params['active'];
        if(this.id==null){
          this.id= this.router.snapshot.paramMap.get('id')
         }
         if(this.id)
         this.invoice=this.list[Number(this.id)]
       this.active=this.invoice.active
      });

      
      }
    

    retour(){
      this.route.navigate(["/facture"])
        }
}
