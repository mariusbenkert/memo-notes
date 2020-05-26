import { NoteModule } from './note/note.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/pages/login/login.component';
import { SignupComponent } from './user/pages/signup/signup.component';
import { ProfileComponent } from './user/pages/profile/profile.component';
import { UserdetailsComponent } from './user/components/userdetails/userdetails.component';
import { MainnavigationComponent } from './shared/navigation/mainnavigation/mainnavigation.component';
import { NavigationlistComponent } from './shared/navigation/navigationlist/navigationlist.component';
import { NavigationitemComponent } from './shared/navigation/navigationitem/navigationitem.component';
import { MainheaderComponent } from './shared/navigation/mainheader/mainheader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { LayoutComponent } from './shared/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    UserdetailsComponent,
    MainnavigationComponent,
    NavigationlistComponent,
    NavigationitemComponent,
    MainheaderComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NoteModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
