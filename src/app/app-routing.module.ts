import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './user/pages/home/home.component';
import { LoginComponent } from './user/pages/login/login.component';
import { SignupComponent } from './user/pages/signup/signup.component';
import { EditorpageComponent } from './note/pages/editorpage/editorpage.component';
import { NotepageComponent } from './note/pages/notepage/notepage.component';
import { AuthGuard } from './shared/auth/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'editor',
    component: EditorpageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'note/:id',
    component: NotepageComponent,
  },
  {
    path: 'page-not-found',
    component: NotepageComponent,
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
