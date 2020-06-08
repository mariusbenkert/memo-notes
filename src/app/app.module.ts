import { NoteService } from './note/components/note.service';
import { NoteModule } from './note/note.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

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
import { SpinnerComponent } from './shared/ui-elements/spinner/spinner.component';
import { ModalComponent } from './shared/ui-elements/modal/modal.component';
import { BackdropComponent } from './shared/ui-elements/backdrop/backdrop.component';
import { AlertMessageComponent } from './shared/ui-elements/alert-message/alert-message.component';

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
    SpinnerComponent,
    ModalComponent,
    BackdropComponent,
    AlertMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    NoteModule,
  ],
  // providers: [{ provide: MatDialogRef, useValue: {} },
  //   { provide: MAT_DIALOG_DATA, useValue: [] }],
  providers: [NoteService],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
