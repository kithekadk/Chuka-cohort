import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { comment } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) { }

  getPostComments(post_id:string){
    return this.http.get<{comments:comment[]}>(`http://localhost:4115/comment/all-post-comments/${post_id}`)
  }
}
