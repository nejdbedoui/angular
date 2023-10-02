import { Component } from '@angular/core';
import { Fournisseur } from '../_Models/Fournisseurs';

@Component({
  selector: 'app-fournisseur-component',
  templateUrl: './fournisseur-component.component.html',
  styleUrls: ['./fournisseur-component.component.css']
})
export class FournisseurComponentComponent {
  
fournisseur:Fournisseur
hide:boolean=false
constructor(){
  this.fournisseur=new Fournisseur(105,"A104B89","Mytek")
}
hiding(){
this.hide=!this.hide
console.log(this.hide)
}
}
