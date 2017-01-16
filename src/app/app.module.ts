 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import {AppRouting,appRoutingComponents} from "./app.routing"
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { IndexComponent } from './index/index.component';
import { MaterialModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
   appRoutingComponents,
   AuthenticationComponent,
   IndexComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AppRouting,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
