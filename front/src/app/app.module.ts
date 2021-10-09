import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouterModule, Routes} from "@angular/router";

import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { RegisterComponent } from './components/register/register.component';
import { ProduitComponent } from './components/produit/produit.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes =[
  {path: 'register' ,component :RegisterComponent},
  {path: 'content' ,component :ContentComponent},
  {path: 'produit' ,component :ProduitComponent},
  {path: 'login' ,component :LoginComponent},
  {path: '**' ,component :ContentComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    RegisterComponent,
    ProduitComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
