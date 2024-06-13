import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { post } from '../../interfaces/interfaces';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterOutlet],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  user_id:string = ''
  posts:post[]=[]

  constructor(private post_service:PostService, private router: Router, private route:ActivatedRoute){
    this.route.params.subscribe(res=>{
      this.user_id = res['user_id']
    })
    this.getPosts()
  }

  getPosts(){
    this.post_service.getUsersPosts(this.user_id).subscribe(res=>{
      this.posts = res.posts
    })
  }

  navigateToPost(index:number){
    let item = this.posts[index]

    console.log(item.id);
    let post_id = item.id

    this.router.navigate(['post', post_id])
    
  }

  deletePost(post_id:string){
    console.log();
    
    this.post_service.deletePost(post_id, this.user_id).subscribe(res=>{
      console.log(res);
      this.getPosts()
    })
    
  }
}
