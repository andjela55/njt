import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='nikola'
  password='nikola'
  errorMessage='Invalid '
  invalidLogin=false
  



  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  
  }
    handleLogin(){
      // if(this.username==="nikola" && this.password==="nikola"){
      //   this.router.navigate(['welcome', this.username])
      //   this.invalidLogin=false
      // }
      // else {
      //   this.invalidLogin=true
      // }
      if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
        this.router.navigate(['welcome', this.username])
        this.invalidLogin=false
      }
           else {
         this.invalidLogin=true
      }
      if(this.hardcodedAuthenticationService.authenticateDoctor(this.username,this.password)){
        this.router.navigate(['welcome-doctor', this.username])
        this.invalidLogin=false
      }
           else {
         this.invalidLogin=true
      }
    }
}
