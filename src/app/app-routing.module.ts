import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FournisseurComponentComponent } from './fournisseur-component/fournisseur-component.component';
import { ListFournisseurComponentComponent } from './list-fournisseur-component/list-fournisseur-component.component';
import { ListProduitsComponentComponent } from './list-produits-component/list-produits-component.component';
import { InvoiceListComponentComponent } from './invoice-list-component/invoice-list-component.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home',component:UserlistComponent},
  {path:'add',component:AddUserComponent},
  {path:'fournisseur',component:FournisseurComponentComponent},
  {path:'fournisseur2',component:ListFournisseurComponentComponent},
  {path:'produit',component:ListProduitsComponentComponent},
  {path:'facture', component:InvoiceListComponentComponent},
  {path:'details/:id/:active',component:InvoiceDetailsComponent},
  {path:'details',component:InvoiceDetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
