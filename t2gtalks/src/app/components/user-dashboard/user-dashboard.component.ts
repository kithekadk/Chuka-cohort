import { Component } from '@angular/core';
import { post } from '../../interfaces/interfaces';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { PostService } from '../../services/post.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  user_id:string = ''

  constructor(private router:Router, private route:ActivatedRoute, private postService: PostService, private authService:AuthService){
    this.route.params.subscribe(res=>{
      this.user_id = res['user_id']
      console.log(res);
    })

    console.log(this.authService.isLoggedIn);
    
  }

  viewUsersPost(){
    this.postService.getUsersPosts(this.user_id).subscribe(res=>{
      
    })
  }

  logout(){
    localStorage.clear()
    this.authService.isLoggedIn = false

    this.router.navigate([''])
  } 

}
