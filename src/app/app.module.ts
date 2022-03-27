import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import { ParentComponent } from './parent/parent.component';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';

import { ViewComponent } from './view/view.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import {newspaperReducer} from 'src/app/ngrx-store/reducers';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ProgressBarModule} from 'primeng/progressbar';
import {DialogModule} from 'primeng/dialog';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ViewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    DialogModule,//Dialog
    TableModule, //table
    CardModule,//cards
    BrowserAnimationsModule,// animations
    InputTextModule,  //ngPrime input text 
    InputMaskModule,  //ngPrime mask validation (MM/YY in credit card)
    PasswordModule, //ngPrime CVV input
    ButtonModule, //ngPrime buttons
    ToastModule, //ngPrime Toasts
    StoreModule.forRoot({newspaperState:newspaperReducer}), //redux store (@ngrx/data)
  

    HttpClientModule //http calls
  ],
  providers: [
    MessageService // ngPrimetoasts
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
