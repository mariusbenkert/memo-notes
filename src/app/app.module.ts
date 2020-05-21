import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/pages/login/login.component';
import { SignupComponent } from './user/pages/signup/signup.component';
import { ProfileComponent } from './user/pages/profile/profile.component';
import { UserdetailsComponent } from './user/components/userdetails/userdetails.component';
import { EditorpageComponent } from './note/pages/editorpage/editorpage.component';
import { NoteslistComponent } from './note/components/noteslist/noteslist.component';
import { NotesitemComponent } from './note/components/notesitem/notesitem.component';
import { EditorComponent } from './note/components/editor/editor.component';
import { NavigationlistComponent } from './shared/navigation/navigationlist/navigationlist/navigationlist.component';
import { NavigationitemComponent } from './shared/navigation/navigationlist/navigationitem/navigationitem/navigationitem.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    UserdetailsComponent,
    EditorpageComponent,
    NoteslistComponent,
    NotesitemComponent,
    EditorComponent,
    NavigationlistComponent,
    NavigationitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
