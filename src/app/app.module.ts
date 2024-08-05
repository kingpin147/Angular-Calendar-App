import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ // AppComponent should be here, not in imports
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // No need to import AppComponent here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
