import { Component } from '@angular/core';
import { post } from '../../interfaces/interfaces';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

  constructor(private router:Router){}

  authorId:string=''

  isEric:boolean=true;

  ericStyles = {
    "font-weight":"bold",
    "color": "green"
  }

  otherStyles = {
    "color": "red",
    "background": "yellow"
  }

  posts:post[]=[
    {id:"1", content:"A professional bear guide demonstrates what to do if a bear charges at you.", authorId:"001", authorName:"Erick"},
    {id:"2", content:"A professional developer", images:["https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_640.png"], authorId:"002", authorName: "Whitney"},
    {id:"3", content:"A professional work station", images:["https://cdn.pixabay.com/photo/2024/05/02/09/16/web-development-8734249_640.png"], authorId:"001", authorName:"Erick"},
    {id:"4", content:"Enjoying life", images:["https://cdn.pixabay.com/photo/2016/11/29/22/04/white-male-1871449_640.jpg"], authorId:"003", authorName: "Clinton"},
    {id:"5", content:"Life of a developer", images:["https://cdn.pixabay.com/photo/2024/05/15/20/58/developer-8764528_640.jpg"], authorId:"002", authorName: "Whitney"},
    {id:"6", content:"After loosing the game", images:["https://cdn.pixabay.com/photo/2022/02/02/10/00/game-6988033_640.png"], authorId:"001", authorName:"Erick"},
  ]

  // getPostsByUser(authorId:string){
  //   this.authorId = authorId
  // }

  navigateToPost(index:number){
    let item = this.posts[index]

    console.log(item.id);
    let post_id = item.id

    this.router.navigate(['posts', post_id])
    
  }
}
