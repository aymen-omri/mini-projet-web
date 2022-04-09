import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http' ; 
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginService } from './login.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { registerLocaleData } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { ForumComponent } from './forum/forum.component';
import { ShopComponent } from './shop/shop.component';
import { AboutusComponent } from './aboutus/aboutus.component';

import { ShopdetailsComponent } from './shopdetails/shopdetails.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { ShareService } from './share.service';
import { CartdetailsComponent } from './cartdetails/cartdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ForumComponent,
    ShopComponent,
    AboutusComponent,
    ShopdetailsComponent,
    CartComponent,
    HeaderComponent,
    CartdetailsComponent,
    
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot([
      {path : 'login' , component : LoginComponent} , 
      {path : '' , component : HomeComponent} , 
      {path : 'login' , component : LoginComponent} ,
      {path : 'register' , component : RegisterComponent },
      {path : 'forum' , component : ForumComponent } , 
      {path : 'shop' , component : ShopComponent },
      {path : 'aboutus' , component : AboutusComponent },
      {path: 'shop/:id' , component: ShopdetailsComponent },
      {path: 'cart' , component: CartComponent }
      

      



    ]),
    ReactiveFormsModule,
    FormsModule,
    BrowserModule
  ],
  providers: [LoginService , CookieService  , ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
