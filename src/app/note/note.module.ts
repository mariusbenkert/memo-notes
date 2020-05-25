import { FormsModule } from '@angular/forms';
import { EditorpageComponent } from './pages/editorpage/editorpage.component';
import { NoteslistComponent } from './components/noteslist/noteslist.component';
import { NotesitemComponent } from './components/notesitem/notesitem.component';
import { EditorComponent } from './components/editor/editor.component';
import { NgModule, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    EditorComponent,
    NotesitemComponent,
    NoteslistComponent,
    EditorpageComponent,
  ],
  imports: [
    CommonModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
    }),
    FormsModule,
  ],
  entryComponents: [EditorComponent],
  exports: [EditorpageComponent, NoteslistComponent],
})
export class NoteModule {}
