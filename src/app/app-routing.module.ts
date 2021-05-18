import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from "./pages/home/home.component";
import {RegisterComponent} from "./pages/register/register.component";
import {LoginComponent} from "./pages/login/login.component";
import {AdvComponent} from "./pages/adv/adv.component";
import {AnnouncementsComponent} from "./pages/announcements/announcements.component";
import {AdvDetailsComponent} from "./pages/announcements/adv-details/adv-details.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {AdvEditComponent} from "./pages/adv-edit/adv-edit.component";
import {AnnouncementsInCategory} from "./pages/announcementInsCategory/announcementsInCategory";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'adv', component: AdvComponent},
  {path: 'advEdit/:id', component: AdvEditComponent},
  {path: 'announcements', component: AnnouncementsComponent},
  {path: 'announcements/age/:ageCategory', component: AnnouncementsInCategory},
  {path: 'announcements/:id', component: AdvDetailsComponent},
  {path: 'profile/:username', component: ProfileComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
