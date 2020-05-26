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

@NgModule({
  declarations: [
    EditorComponent,
    NotesitemComponent,
    NoteslistComponent,
    EditorpageComponent,
    SearchbarComponent,
    CreatenoteComponent,
  ],
  imports: [
    CommonModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
    }),
    FormsModule,
    DragDropModule,
  ],
  entryComponents: [EditorComponent],
  exports: [EditorpageComponent, NoteslistComponent],
})
export class NoteModule {}
