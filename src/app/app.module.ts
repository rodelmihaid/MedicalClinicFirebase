import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { MeniuMaterialsComponent } from './meniu-materials/meniu-materials.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SendVerificationEmailComponent } from './send-verification-email/send-verification-email.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './carousel/carousel.component';
import { EducatieMedicalaComponent } from './educatie-medicala/educatie-medicala.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AbonamenteComponent } from './abonamente/abonamente.component';
import { FirebaseApp } from '@angular/fire/app';
import { ChatdialogComponent } from './chatdialog/chatdialog.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ShopComponent } from './shop/shop.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
@NgModule({
  declarations: [
    AppComponent,
    MeniuMaterialsComponent,
    RegisterComponent,
    DashboardComponent,
    SendVerificationEmailComponent,
    HeaderComponent,
    LoginComponent,
    CarouselComponent,
    EducatieMedicalaComponent,
    ForgotPasswordComponent,
    AbonamenteComponent,
    ChatdialogComponent,
    ShopComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
