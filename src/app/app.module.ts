import { BrewsService } from './brews.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrewComponent } from './brew/brew.component';

@NgModule({
  declarations: [
    AppComponent,
   
    BrewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BrewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
