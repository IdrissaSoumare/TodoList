import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAllComponent } from './pages/page-all/page-all.component';
import { PageActiveComponent } from './pages/page-active/page-active.component';
import { PageCompletedComponent } from './pages/page-completed/page-completed.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddBarComponent } from './add-bar/add-bar.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAllComponent,
    PageActiveComponent,
    PageCompletedComponent,
    NavbarComponent,
    AddBarComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
