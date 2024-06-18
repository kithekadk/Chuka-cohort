import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { new_user, user } from '../../interfaces/interfaces';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NavbarComponent, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerUserForm!:FormGroup

  constructor(private fb:FormBuilder, private authService: AuthService){
    this.registerUserForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, validatePassword()]]
    })
  }
  registerUser(user:new_user){
    this.authService.createAccount(user).subscribe(res=>{
      console.log(res);
      
    })
  }
}

function validatePassword(): ValidatorFn{
  return (control: AbstractControl):ValidationErrors | null =>{
    const value = control.value

    if(!value){
      return null
    }

    const hasUpperCase = /[A-Z]+/.test(value)

    const hasLowerCase = /[a-z]+/.test(value)

    const hasNumeric = /[0-9]+/.test(value)

    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric

    return !passwordValid ? {passwordStrength:true} : null

  }
}
