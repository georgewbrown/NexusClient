import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component'
import { PostsComponent } from './posts/posts.component';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component'
import { AccountCreateComponent } from './account-create/account-create.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { BusniessProfileComponent } from './busniess-profile/busniess-profile.component';


const routes: Routes = [
  {path: '', redirectTo:'/landing', pathMatch: 'full'},
  {path: 'landing', component: LandingComponent },
  {path: 'posts', component: PostsComponent },
  {path: 'account', component: AuthComponent },
  {path: 'fprofile', component: ProfileComponent },
  {path: 'bprofile', component: BusniessProfileComponent },
  {path: 'create', component: AccountCreateComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
