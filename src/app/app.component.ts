import { Component, VERSION } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private r: Router, private auth: AngularFireAuth) {

    //this.auth.onAuthStateChange(userDetails => {this.isLoggedIn = !!null}) (is the same solution)
    this.auth.onAuthStateChanged(userDetails => {
      if (userDetails != null) {
        this.isLoggedIn = true;
      }
      else {
        this.isLoggedIn = false;
      }
    })
  }

  logout() {

    this.auth.signOut().then(() => this.r.navigate(['login']))
    //ניווט חזרה לעמוד לוגין
  }


  isLoggedIn: boolean = false;
}

