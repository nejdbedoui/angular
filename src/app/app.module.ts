import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserlistComponent } from './userlist/userlist.component';
import { FOOTERComponent } from './footer/footer.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FournisseurComponentComponent } from './fournisseur-component/fournisseur-component.component';
import { ListFournisseurComponentComponent } from './list-fournisseur-component/list-fournisseur-component.component';
import { ListProduitsComponentComponent } from './list-produits-component/list-produits-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserlistComponent,
    FOOTERComponent,
    AddUserComponent,
    FournisseurComponentComponent,
    ListFournisseurComponentComponent,
    ListProduitsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
