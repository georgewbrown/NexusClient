import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component'
import { PostsComponent } from './posts/posts.component';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component'
import { AccountCreateComponent } from './account-create/account-create.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { BusinessProfileComponent } from './business-profile/business-profile.component';
import { JobPostComponent } from './job-post/job-post.component';
import { AdminLoginComponent } from './admin-login/admin-login.component'



const routes: Routes = [
  {path: '', redirectTo:'/landing', pathMatch: 'full'},
  {path: 'landing', component: LandingComponent },
  {path: 'posts', component: PostsComponent},
  {path: 'account', component: AuthComponent },
  {path: 'fprofile', component: ProfileComponent },
  {path: 'bprofile', component: BusinessProfileComponent },
  {path: 'create', component: AccountCreateComponent },
  {path: 'jobposts', component: JobPostComponent },
  {path: 'admin', component: AdminLoginComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
