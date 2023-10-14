import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent, SecondComponent } from './components';
import { FormsModule } from "@angular/forms";
import { FirstPipe } from './pipes/first.pipe';
import { ColorDirective } from './directive/color.directive';
import { ValidateAccessDirective } from './directive/validate-access.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    FirstPipe,
    ColorDirective,
    ValidateAccessDirective,
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
