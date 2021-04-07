import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AdvComponent } from './pages/adv/adv.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import {HttpClientModule} from "@angular/common/http";
import { AdvDetailsComponent } from './pages/announcements/adv-details/adv-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AdvComponent,
    AnnouncementsComponent,
    AdvDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
