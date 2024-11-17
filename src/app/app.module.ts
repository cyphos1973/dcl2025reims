import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {CommonModule} from "@angular/common";
import {MenuComponent} from "./components/menu/menu.component";
import {FooterComponent} from "./components/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    MenuComponent,
    FooterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
