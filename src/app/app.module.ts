import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';
import { QuoteComponent } from './quote/quote.component';




@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    FormComponent,
    QuoteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
