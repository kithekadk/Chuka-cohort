import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { provideHttpClient } from '@angular/common/http';
import { PostService } from '../../services/post.service';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { setupPosts } from '../common/setup-test-data';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let mockActivatedRoute = {
    params: of({ user_id: 'a5e7eef1-9acc-4d2e-a39b-b1fecf0d291d' })
  };
  let postsService:any

  let el: DebugElement

  let postServiceSpy:any

  beforeEach(async () => {

    postServiceSpy = jasmine.createSpyObj('PostService', ['getUsersPosts', 'deletePost']);

    await TestBed.configureTestingModule({
      imports: [PostsComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), {
        provide: PostService, useValue: postServiceSpy,
      },{
        provide: ActivatedRoute, useValue: mockActivatedRoute
      }]
    })
    .compileComponents();

    postServiceSpy.getUsersPosts.and.returnValue(of(setupPosts()));

    postServiceSpy.deletePost.and.returnValue(of({
      message: "post delete success"
    }))
    

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement
    postsService = TestBed.inject(PostService)

    fixture.detectChanges();
  });

  it('should create', () => {

    console.log(component.posts);
    
    expect(component).toBeTruthy();
  });

  it('should fetch display posts', ()=>{
    expect(component.posts.length).toBe(2)
  })

  it('fetched the correct first posts',()=>{
    expect(component.posts[0].content).toBe('Happy to announce that, I got a new role as a Software Developer');
  })

  it('should delete post and refresh the list', (done: DoneFn) => { 
      
    const cards = el.queryAll(By.css('.delete'))

    console.log(cards);

    cards[0].triggerEventHandler('click', null);

    fixture.detectChanges()

    setTimeout(() => {

      expect(postServiceSpy.deletePost.calls.any()).toBe(true);

      done();

    }, 500);
  });
});

