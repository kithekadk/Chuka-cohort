import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostsComponent } from './components/posts/posts.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', pathMatch: 'prefix', redirectTo: ''},
    {path:'login', component: LoginComponent},
    {path:'user', component: UserDashboardComponent, canActivate: [authGuard]},
    {path:'posts', component: PostsComponent},
    {path: 'post/:post_id', component: SinglePostComponent},
    {path: '**', component: NotfoundComponent}
];
