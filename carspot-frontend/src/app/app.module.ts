import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './feature/nav-bar/nav-bar.component';
import { FooterComponent } from './feature/footer/footer.component';
import { PostViewComponent } from './post-view/post-view.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { CardComponent } from './feature/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    FooterComponent,
    PostViewComponent,
    PostCreateComponent,
    ProfileViewComponent,
    LoginViewComponent,
    RegisterViewComponent,
    CardComponent
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
