import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';

import {HttpModule, JsonpModule} from '@angular/http';
import {routing, appRoutingProviders} from './app.routing';


import {FavoritosListComponent} from './components/favoritos-list.component';
import {FavoritoDetailComponent} from './components/favorito-detail.component';
import {FavoritoAddComponent} from './components/favorito-add.component';

import { FavoritoEditComponent } from './components/favorito-edit.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule,
   				routing
   				],
  declarations: [ AppComponent,
  				FavoritosListComponent,
  				FavoritoDetailComponent,
  				FavoritoAddComponent,
          FavoritoEditComponent
  		
  				 ],
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }
