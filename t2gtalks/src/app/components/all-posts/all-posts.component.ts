import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { post } from '../../interfaces/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-posts',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './all-posts.component.html',
  styleUrl: './all-posts.component.css'
})
export class AllPostsComponent {
  posts:post[]=[]

  constructor(private post_service:PostService, private router: Router, private route:ActivatedRoute){
    this.getPosts()
  }

  getPosts(){
    this.post_service.getAllPost().subscribe(res=>{
      this.posts = res.posts
    })
  }

  navigateToPost(index:number){
    let item = this.posts[index]

    console.log(item.id);
    let post_id = item.id

    this.router.navigate(['post', post_id])
    
  }
}
