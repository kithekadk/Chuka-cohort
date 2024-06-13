import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { post } from '../../interfaces/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent {
  post_id:string=''
  post!:post

  constructor(private post_service:PostService, private route:ActivatedRoute){
    this.route.params.subscribe(res=>{
      console.log(res['post_id']);
      this.post_id = res['post_id']
    })

    this.getPost()
  }

  getPost(){
    this.post_service.getOnePost(this.post_id).subscribe(res=>{
      this.post = res.post
    })
  }
}
