import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { comment, new_comment } from '../interfaces/interfaces';
import { base_url } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  base_url = base_url

  constructor(private http:HttpClient) { }

  getPostComments(post_id:string){
    return this.http.get<{comments:comment[]}>(`${this.base_url}/comment/all-post-comments/${post_id}`)
  }

  addComment(comment_details: new_comment){
    return this.http.post<{message:string}>(`${this.base_url}/comment/new`, comment_details)
  }
}


