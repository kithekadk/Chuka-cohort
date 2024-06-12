import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { post } from '../../interfaces/interfaces';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterOutlet],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  posts:post[]=[]

  constructor(private post_service:PostService, private router: Router){
    this.getPosts()
  }

  getPosts(){
    this.posts = this.post_service.posts

    console.log(this.posts);
  }

  navigateToPost(index:number){
    let item = this.posts[index]

    console.log(item.id);
    let post_id = item.id

    this.router.navigate(['post', post_id])
    
  }
}
