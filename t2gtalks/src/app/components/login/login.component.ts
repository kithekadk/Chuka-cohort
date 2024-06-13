import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { login_details } from '../../interfaces/interfaces';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, RouterLink, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{

  loginError:boolean = false
  loginSuccess:boolean = false
  error:string = ''

  @ViewChild('loginForm') loginForm!: NgForm

  constructor(private router:Router, private authService:AuthService){
    // setTimeout(() => {
    //   this.patchValue()
    // });
  }

  login(details:login_details){

    // console.log(details);
  
    this.authService.loginUser(details).subscribe(res=>{

      if(res.token){
        this.authService.checkDetails(res.token).subscribe(res=>{
          console.log(res.info?.id);

          if(res.info){
            this.loginSuccess = true

            this.authService.isLoggedIn = true
            localStorage.setItem('isLoggedIn', 'true')

            setTimeout(() => {
              this.loginSuccess = false
              this.router.navigate([res.info?.id, 'posts'])
            }, 2000);
          }

          
        })
      }else if(res.error){
        this.loginError = true
        this.error = res.error as string

        setTimeout(() => {
          this.error = ''
          this.loginError = false
        }, 3000);
      }
      
    })
  }

  setValue(){
    this.loginForm.setValue({
      user:{
        email: 'abc@yopmail.com',
        password: '12345678'
      }
    })
  }

  patchValue(){
    this.loginForm.form.patchValue({
      user:{
        email: 'john@yopmail.com'
      }
    })
  }
}
