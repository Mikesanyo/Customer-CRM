import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerPageComponent } from './components/customer-page/customer-page.component';
import { CustomersTableIcons } from './components/customers-table-icons.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AddEditDisplayCustomerComponent } from './components/customer-page/add-edit-display-customer/add-edit-display-customer.component';
import { RouterModule } from '@angular/router';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AngularFireAuthGuard, AngularFireAuthGuardModule } from "@angular/fire/compat/auth-guard";

const firebaseConfig = {
  apiKey: "AIzaSyC0RzYD5eF0hXuyPP69_PI6NmFB79tVDJ8",
  authDomain: "customersandcontact.firebaseapp.com",
  databaseURL: "https://customersandcontact-default-rtdb.firebaseio.com",
  projectId: "customersandcontact",
  storageBucket: "customersandcontact.appspot.com",
  messagingSenderId: "282585637631",
  appId: "1:282585637631:web:d43442fe9bae1826dae2ca",
  measurementId: "G-DEF9RLMDQZ"
};

@NgModule({
  imports: [
    AngularFireAuthGuardModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,

    RouterModule.forRoot([

      {
        path: 'customers',
        component: CustomerPageComponent,
        canActivate: [AngularFireAuthGuard]
      },
      {
        path: 'contacts',
        component: ContactsPageComponent,
        canActivate: [AngularFireAuthGuard]
      },

      {
        path: 'login',
        component: LoginPageComponent
      },

      {
        path: '**',
        redirectTo: 'login'
      }
    ])
  ],
  declarations: [
    AppComponent,
    CustomersTableIcons,
    CustomerPageComponent,
    AddEditDisplayCustomerComponent,
    ContactsPageComponent,
    LoginPageComponent
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
