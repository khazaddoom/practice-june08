import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SethighlightDirective } from './directives/sethighlight.directive';
import { HandleTextDirective } from './directives/handletext.directive';

@NgModule({
  declarations: [
    AppComponent,
    SethighlightDirective,
    HandleTextDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
