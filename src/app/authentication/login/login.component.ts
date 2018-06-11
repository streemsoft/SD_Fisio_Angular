import { FirebaseService } from './../../firebase.service';
import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

   email:string;
   senha:string;

    constructor(private fire: FirebaseService) {}

    ngOnInit() {}

    botaoEntrar():void{
        if(this.email != null && this.senha != null && this.email != '' && this.senha !=''){
            this.fire.loginEmail(this.email,this.senha).then(x =>console.log(x));
            
        }else{
            console.log('sem dados');
        }
    }

    sair(){
        this.fire.logout();
    }

  

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }

}
