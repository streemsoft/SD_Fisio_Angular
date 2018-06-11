import { FirebaseService } from './firebase.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SD Fisio';

  constructor( private firebase : FirebaseService ){
    var sLogin = localStorage.getItem('AI65z454aSy5454AQ54Go1aa4HER36');
    var sAuth = localStorage.getItem('YusgfdloS8TKvhghg1-96sdgsdf_Sa_Rg');
    if ( sLogin != null ){
      this.firebase.firebaseui = sLogin;
    }else{
      this.firebase.firebaseui = '_false'
    }
    if ( sAuth != null ){
      this.firebase.firebaseKey = sAuth;
    }
  }

}
