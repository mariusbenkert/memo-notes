import { NoteService } from './../note.service';
import { Note } from './../note';
import { EditorComponent } from './../editor/editor.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.css'],
})
export class CreatenoteComponent implements OnInit {
  currentNote: Note;
  constructor(public dialog: MatDialog, private noteService: NoteService) {}

  // TODO: Note -> erstellen -> "Empty Note" wird angezeigt,
  // allerdings beim direkten editieren wird nicht geupdated, sondern erst beim erneuten Ausführen

  createNote() {
    this.noteService.addNote().subscribe((responseData) => {
      this.currentNote = responseData.note;
      this.openEditor();
    });
  }

  openEditor() {
    const dialogRef = this.dialog.open(EditorComponent, {
      width: '500px',
      data: this.currentNote,
    });

    const sub = dialogRef.componentInstance.onAdd.subscribe((data) => {
      console.log(data.title, data.body);
      this.currentNote.title = data.title;
      this.currentNote.content = data.body;
    });

    dialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe();
    });
  }

  ngOnInit(): void {}
}
