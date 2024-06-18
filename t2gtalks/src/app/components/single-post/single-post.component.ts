import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { comment, post } from '../../interfaces/interfaces';
import { CommonModule } from '@angular/common';
import { CommentsService } from '../../services/comments.service';

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
  comments:comment[]=[]

  commentsCount!:number

  constructor(private post_service:PostService, private commentService: CommentsService, private route:ActivatedRoute){
    this.route.params.subscribe(res=>{
      console.log(res['post_id']);
      this.post_id = res['post_id']
    })

    this.getPost()
    this.getPostComments()
  }

  getPost(){
    this.post_service.getOnePost(this.post_id).subscribe(res=>{
      this.post = res.post
    })
  }

  getPostComments(){
    this.commentService.getPostComments(this.post_id).subscribe(res=>{
      this.commentsCount = res.comments.length
      this.comments =res.comments
    })
  }
}
