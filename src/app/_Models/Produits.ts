export class Produits {
    idProduit : number|null;
    code:string;
    libelle:string;
    prixUnitaire:number|null;
    tauxTVA:number|null;
    constructor(
         idProduit: number|null,
         code: string,
         libelle: string,
         prixUnitaire:number|null,
         tauxTVA:number|null
      ) {
       this.idProduit=idProduit;
       this.code=code;
       this.libelle=libelle;
       this.prixUnitaire=prixUnitaire;
       this.tauxTVA=tauxTVA;
      }

    }