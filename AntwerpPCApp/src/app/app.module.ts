import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComputerruimtenComponent } from './computerruimten/computerruimten.component';
import { PcruimtenService} from './Service/pcruimten.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ComputerruimtenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PcruimtenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
