import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  title:string = 'T2GTalks'

  name='John Doe'

  landingImage = 'https://cdn.pixabay.com/photo/2012/04/15/21/17/speech-35342_640.png'

  login(){
    alert('Logged in')
  }

  logInput(event: any){
    console.log(event.target.value); 
  }

  printName(){
    console.log(this.name);
    
  }

  getName(name:string){
    console.log(name);
    
  }
}
