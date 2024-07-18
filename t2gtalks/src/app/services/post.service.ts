import { Injectable } from '@angular/core';
import { new_post, post } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { base_url } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http:HttpClient) { }

  createPost(post:new_post){
    return this.http.post<{message?:string, error?:string}>(`${base_url}/post/create`, post)
  }

  getUsersPosts(user_id:string){
    return this.http.get<{posts:post[]}>(`${base_url}/post/all/${user_id}`)
  }

  getOnePost(post_id:string){
    return this.http.get<{post:post}>(`${base_url}/post/single/${post_id}`)
  }

  getAllPost(){
    return this.http.get<{posts:post[]}>(`${base_url}/post/all`)
  }

  deletePost(post_id:string, user_id:string){
    return this.http.delete<{message?:string, error?:string}>(`${base_url}/post/delete`, {
      body:{ post_id, user_id }
    })
  }
}
