import { NoteService } from './../note.service';
import { EditorComponent } from './../editor/editor.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Note } from '../note';

@Component({
  selector: 'app-notesitem',
  templateUrl: './notesitem.component.html',
  styleUrls: ['./notesitem.component.css'],
})
export class NotesitemComponent implements OnInit {
  @Input() noteData: Note;

  isEmpty: boolean;

  constructor(
    public dialog: MatDialog,
    private noteService: NoteService,
    private router: Router
  ) {}

  openEditor(): void {
    const dialogRef = this.dialog.open(EditorComponent, {
      width: '1000px',
      data: this.noteData,
    });

    const sub = dialogRef.componentInstance.onAdd.subscribe((data) => {
      console.log(data.content);
      this.noteData.title = data.title;
      this.noteData.content = data.content;
      this.checkIfEmpty();
    });

    dialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe();
      console.log(this.noteData.content);
      this.noteService.updateNote(this.noteData);
    });
  }

  // shareNote() {
  //   console.log(this.body);
  //   let notePath = '/note/' + this.id.toString(10);
  //   this.router.navigate([`${notePath}`]);
  //   console.log('Share', notePath);
  // }

  deleteNote() {
    console.log('Delete');
    this.noteService.deleteNote(this.noteData._id);
  }

  checkIfEmpty() {
    if (this.noteData.title == '' && this.noteData.content == '') {
      this.isEmpty = true;
    } else {
      this.isEmpty = false;
    }
  }

  ngOnInit() {
    if (this.noteData.title == '' && this.noteData.content == '') {
      this.isEmpty = true;
    } else {
      this.isEmpty = false;
    }
  }
}
