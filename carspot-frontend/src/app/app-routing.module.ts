import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {PostViewComponent} from "./post-view/post-view.component";
import {PostCreateComponent} from "./post-create/post-create.component";
import {ProfileViewComponent} from "./profile-view/profile-view.component";
import {LoginViewComponent} from "./login-view/login-view.component";
import {RegisterViewComponent} from "./register-view/register-view.component";

const routes: Routes = [
  { path: 'post-view', component:  PostViewComponent},
  { path: 'post-create', component:  PostCreateComponent},
  { path: 'profile-view', component:  ProfileViewComponent},
  { path: 'login-view', component:  LoginViewComponent},
  { path: 'register-view', component:  RegisterViewComponent},
  { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
