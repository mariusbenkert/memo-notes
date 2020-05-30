import { NoteModule } from './note/note.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

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
import { ButtonComponent } from './shared/button/button.component';
import { HomeComponent } from './user/pages/home/home.component';

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
    ButtonComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NoteModule,
  ],
  // providers: [{ provide: MatDialogRef, useValue: {} },
  //   { provide: MAT_DIALOG_DATA, useValue: [] }],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
