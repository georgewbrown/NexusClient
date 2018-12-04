import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component'
import { PostsComponent } from './posts/posts.component';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  {path: '', redirectTo:'/landing', pathMatch: 'full'},
  {path: 'landing', component: LandingComponent },
  {path: 'posts', component: PostsComponent },
  {path: 'account', component: AuthComponent },

]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
