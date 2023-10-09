import { Component } from '@angular/core';
import { Fournisseur } from '../_Models/Fournisseurs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-list-fournisseur-component',
  templateUrl: './list-fournisseur-component.component.html',
  styleUrls: ['./list-fournisseur-component.component.css']
})
export class ListFournisseurComponentComponent {
constructor(private router:Router){

}
  listeFournisseur:Fournisseur[]=[
    new Fournisseur(1,"1ABC4522","hp"),
    new Fournisseur(2,"2ABC4522","dell"),
    new Fournisseur(3,"3ABC4522","lenovo"),
    new Fournisseur(400,"40ABC4522","asus")
  ]

  getColor(code:string){
    return code.startsWith('2A')
  }

  delete(i:number){
    this.listeFournisseur.splice(i,1)
  }
  add(){
this.router.navigate(["/add"])
  }
}
