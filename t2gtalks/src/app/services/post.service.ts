import { Injectable } from '@angular/core';
import { post } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  createPost(post:post){
    return this.http.post<{massage?:string, error?:string}>('http://localhost:4115/post/create', post)
  }

  getUsersPosts(user_id:string){
    return this.http.get<{posts:post[]}>(`http://localhost:4115/post/all/${user_id}`)
  }

  getOnePost(post_id:string){
    return this.http.get<{post:post}>(`http://localhost:4115/post/single/${post_id}`)
  }

  getAllPost(){
    return this.http.get<{posts:post[]}>(`http://localhost:4115/post/all`)
  }

  deletePost(post_id:string, user_id:string){
    return this.http.delete<{message?:string, error?:string}>('http://localhost:4115/post/delete', {
      body:{ post_id, user_id }
    })
  }
}
