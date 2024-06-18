import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {

  createPostForm!: FormGroup
  user_id:string=''
  images: string[] = []

  isLoading:boolean = false

  imageUrl = ''

  constructor(private fb:FormBuilder, private postService: PostService){
    this.user_id = localStorage.getItem('user_id') as string

    this.createPostForm = this.fb.group({
      content: [null, Validators.required],
      images: [['']],
      authorId: [this.user_id]
    })
  }

  getImagesUrl(event:any){
    this.isLoading=true
    const files = event.target.files

    if(files){
      const formData = new FormData()

      formData.append("file", files[0])
      formData.append("upload_preset", "t2gtalks")
      formData.append("cloud_name", "dtn9kzx2v")

      fetch('https://api.cloudinary.com/v1_1/dtn9kzx2v/image/upload', {
        method: "POST",
        body: formData
      }).then((res=>res.json())).then(res=>{

        this.images.push(res.url)

        if(res.url){
          this.isLoading = false
        }else{
          this.isLoading = true
        }
        
        this.createPostForm.patchValue({images: this.images})
      })
    }
    
  }

  createPost(){
    this.postService.createPost(this.createPostForm.value).subscribe(res=>{
      console.log(res);
      
    })
  }
}
