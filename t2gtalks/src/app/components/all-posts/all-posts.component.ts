import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { post } from '../../interfaces/interfaces';
import { CommonModule } from '@angular/common';
import { SentencecasePipe } from '../../pipes/sentencecase.pipe';
import { SearchPipe } from '../../pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-all-posts',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SentencecasePipe, SearchPipe, FormsModule],
  templateUrl: './all-posts.component.html',
  styleUrl: './all-posts.component.css'
})
export class AllPostsComponent {
  posts:post[]=[]
  searchString:string = ''
  commentsCount!:number

  add_post:boolean =false

  fetched_post!:post

  comment_author_id:string = ''

  constructor(private post_service:PostService, private commentService:CommentsService, private router: Router){
    this.comment_author_id = localStorage.getItem('user_id') as string
    this.getPosts()
  }

  getPosts(){
    this.post_service.getAllPost().subscribe(res=>{
      this.posts = res.posts
      for(let post of this.posts){
        this.commentService.getPostComments(post.id).subscribe(res=>{
          
          console.log(res.comments.length);
          
          this.commentsCount = res.comments.length

          this.posts = this.posts.map((existingPost )=>{
            if (existingPost.id === post.id) {
              return {
                ...existingPost,
                commentsCount: this.commentsCount
              };
            }
            return existingPost;

          })
          console.log(this.posts);
          
        })
      }
    })
  }

  getPostIndex(index:number){
    this.fetched_post =this.posts[index]
    this.add_post = !this.add_post
  }

  comment(value:{comment:string}){

    if(this.fetched_post){
      console.log(value.comment, this.fetched_post.id, this.comment_author_id);
      
      this.commentService.addComment({comment:value.comment, post_id: this.fetched_post.id, authorId: this.comment_author_id}).subscribe(res=>{
        console.log(res);
        
      })
    }
    
  }


  navigateToPost(index:number){
    let item = this.posts[index]

    console.log(item.id);
    let post_id = item.id

    this.router.navigate(['home/post', post_id])
  }
}
