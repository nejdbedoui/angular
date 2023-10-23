import { Injectable } from '@angular/core';
import { Produits } from '../_Models/Produits';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  listproduit:Produits[]= [
    new Produits(1, "127", "PC", 2000, 10),
    new Produits(2, "128", "TV", 1000, 20),
    new Produits(3, "128", "Table", 200, 30),
  ]

  constructor() { }

  public getAllProducts(){
    return this.listproduit
  }
}
