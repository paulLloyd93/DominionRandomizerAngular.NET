import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {DominionService} from './dominion.service';

import { AppComponent } from './app.component';
import { CardsComponent } from './randomizer/cards/cards.component';
import { ParametersComponent } from './randomizer/parameters/parameters.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ParametersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DominionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
