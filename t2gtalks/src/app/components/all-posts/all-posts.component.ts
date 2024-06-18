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

  constructor(private post_service:PostService, private commentService:CommentsService, private router: Router, private route:ActivatedRoute){
    this.getPosts()
  }

  getPosts(){
    this.post_service.getAllPost().subscribe(res=>{
      this.posts = res.posts
      for(let post of this.posts){
        this.commentService.getPostComments(post.id).subscribe(res=>{
          
          console.log(res.comments);
          
          this.commentsCount = res.comments.length
          
        })
      }
    })
  }


  navigateToPost(index:number){
    let item = this.posts[index]

    console.log(item.id);
    let post_id = item.id

    this.router.navigate(['post', post_id])
  }
}
