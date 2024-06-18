import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostsComponent } from './components/posts/posts.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './guards/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CreatePostComponent } from './components/create-post/create-post.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', pathMatch: 'prefix', redirectTo: '' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: ':user_id', component: UserDashboardComponent, children: [
            { path: 'posts', component: AllPostsComponent },
            { path: 'create-post', component: CreatePostComponent },
            { path: ':post_id', component: SinglePostComponent },
            { path: '', component: PostsComponent },
        ]
    },
    { path: 'admin', component: AdminDashboardComponent },
    { path: '**', component: NotfoundComponent }
];
