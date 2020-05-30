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
  constructor(public dialog: MatDialog, private noteService: NoteService) {}

  addNote() {
    console.log('add note');
    const dialogRef = this.dialog.open(EditorComponent, {
      width: '500px',
      data: { title: '', body: '' },
    });

    let newNote: Note = {
      id: null,
      title: '',
      body: '',
    };

    const sub = dialogRef.componentInstance.onAdd.subscribe((data) => {
      console.log(data.title, data.body);
      newNote.title = data.title;
      newNote.body = data.body;
    });

    dialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe();
    });

    // get Data

    this.noteService.addNote(newNote);
  }

  ngOnInit(): void {}
}
