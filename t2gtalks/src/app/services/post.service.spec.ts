import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { new_post, posts } from '../test_data/testdata';

describe('PostService', () => {
  let service: PostService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        PostService, provideHttpClient(), provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(PostService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  afterEach(()=>{
    httpTestingController.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get posts of a single user', ()=>{

    service.getUsersPosts('17236d6e-930b-4f4b-a9f2-54fafeb8ca1b').subscribe(res=>{
      expect(res.posts).toBeTruthy()

      console.log(res.posts);


      for(let post of posts){
        expect(post.authorId).toBe('17236d6e-930b-4f4b-a9f2-54fafeb8ca1b')
      }
    })

    const req = httpTestingController.expectOne('http://localhost:4115/post/all/17236d6e-930b-4f4b-a9f2-54fafeb8ca1b')

    expect(req.request.method).toEqual('GET')

    req.flush({posts})
  })

  it('should create a new post', ()=>{
    service.createPost(new_post).subscribe(res=>{
      expect(res.message).toBe("Post created successfully")
    })

    const req = httpTestingController.expectOne('http://localhost:4115/post/create')

    expect(req.request.method).toEqual("POST")

    expect(req.request.body.content).toEqual(new_post.content)

    req.flush({message: "Post created successfully"})
  })

  it('should get all posts', ()=>{
    service.getAllPost().subscribe(res=>{
      expect(res).toBeTruthy()
      expect(res.posts.length).toBe(2)

      const post = res.posts.find(post => post.id == 'fea51ffd-8115-491d-807c-0992d56f5982')

      expect(post?.content).toBe('Learning Angular Services')
    })

    const req = httpTestingController.expectOne('http://localhost:4115/post/all')
    expect(req.request.method).toEqual("GET")

    req.flush({posts})
  })

  it('should get a post by ID', ()=>{
    service.getOnePost('fea51ffd-8115-491d-807c-0992d56f5982').subscribe(res=>{
      expect(res).toBeTruthy()

      expect(res.post.id).toBe('fea51ffd-8115-491d-807c-0992d56f5982')
    })

    const req = httpTestingController.expectOne('http://localhost:4115/post/single/fea51ffd-8115-491d-807c-0992d56f5982')

    expect(req.request.method).toEqual('GET')

    req.flush({post:posts[0]})
  })
});
