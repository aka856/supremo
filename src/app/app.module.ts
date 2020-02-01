import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OutputComponent } from './output/output.component';
import { InputOneComponent } from './input-one/input-one.component';

@NgModule({
  declarations: [
    AppComponent,
    OutputComponent,
    InputOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
