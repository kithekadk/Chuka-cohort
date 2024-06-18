import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { comment, new_comment } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) { }

  getPostComments(post_id:string){
    return this.http.get<{comments:comment[]}>(`http://localhost:4115/comment/all-post-comments/${post_id}`)
  }

  addComment(comment_details: new_comment){
    return this.http.post<{message:string}>('http://localhost:4115/comment/new', comment_details)
  }
}


