import { FormsModule } from '@angular/forms';
import { EditorpageComponent } from './pages/editorpage/editorpage.component';
import { NoteslistComponent } from './components/noteslist/noteslist.component';
import { NotesitemComponent } from './components/notesitem/notesitem.component';
import { EditorComponent } from './components/editor/editor.component';
import { NgModule, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotepageComponent } from './pages/notepage/notepage.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from '../shared/auth/auth-interceptor.service';

@NgModule({
  declarations: [
    EditorComponent,
    NotesitemComponent,
    NoteslistComponent,
    EditorpageComponent,
    SearchbarComponent,
    CreatenoteComponent,
    NotepageComponent,
  ],
  imports: [
    CommonModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
    }),
    FormsModule,
    DragDropModule,
  ],
  // providers: [{ provide: MatDialogRef, useValue: {} },
  //   { provide: MAT_DIALOG_DATA, useValue: [] }],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  entryComponents: [EditorComponent],
  exports: [EditorpageComponent, NoteslistComponent, CreatenoteComponent],
})
export class NoteModule {}
