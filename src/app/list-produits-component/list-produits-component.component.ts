import { Component, OnInit } from '@angular/core';
import { Produits } from '../_Models/Produits';
import { ProductServiceService } from '../_Services/product-service.service';

@Component({
  selector: 'app-list-produits-component',
  templateUrl: './list-produits-component.component.html',
  styleUrls: ['./list-produits-component.component.css']
})
export class ListProduitsComponentComponent implements OnInit {
  listProduits: Produits[]
  index:number[]=[]
  code:string=''
  ajout:boolean=false
  produit:Produits=new Produits(null,'','',null,null)
  index2:number
  count:number

  constructor(private produitservice:ProductServiceService){
// this.listProduits=  [
//   new Produits(1, "P147852P", "Produit1", 12.5, 0.02),
//   new Produits(2, "P147552P", "Produit1", 30, 0.1980),
//   new Produits(3, "D14785CC", "Produit1", 20, 0.1980),
//   new Produits(4, "E147852P", "Produit1", 50, 0.1980),
//   new Produits(5, "F147852P", "Produit1", 70, 0.02),
// ];
  }
  ngOnInit(): void {
    this.getListproduct()
  }
  getListproduct(){
    this.listProduits=this.produitservice.getAllProducts();
  }

getNbProductsByLibelle(libelle:string):number{
  return this.listProduits.filter(produit => produit.libelle === libelle).length;

}

calculer(libelle:string,index:number){
this.index2=index
this.count=this.getNbProductsByLibelle(libelle)
}







  
  modifiertva(i:number){
    this.listProduits[i].tauxTVA=0.02
    this.index.push(i)
    console.log(this.listProduits)
  }

  contain(i:number){
    if(this.index.indexOf(i)!==-1){
      return true
    }
    return false
  }
  ajouter(){
    this.ajout=!this.ajout
  }

  ajouterp(){
    console.log(this.produit)
    this.listProduits.push(this.produit)
    this.produit=new Produits(null,'','',null,null)

  }
}
