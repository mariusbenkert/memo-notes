import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './user/pages/home/home.component';
import { LoginComponent } from './user/pages/login/login.component';
import { SignupComponent } from './user/pages/signup/signup.component';
import { EditorpageComponent } from './note/pages/editorpage/editorpage.component';


// const appRoutes: Routes = [
//   {
//     path: "",
//     component: HomeComponent,
//   },
//   {
//     path: "login",
//     component: LoginComponent
//   },
//   {
//     path: "signup",
//     component: SignupComponent
//   },
//   {
//     path: "editor",
//     component: EditorpageComponent
//   }
// ];

@NgModule({
  // imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
