import { NoteService } from './../note.service';
import { EditorComponent } from './../editor/editor.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notesitem',
  templateUrl: './notesitem.component.html',
  styleUrls: ['./notesitem.component.css'],
})
export class NotesitemComponent implements OnInit {
  @Input() id: number;
  @Input() title: string;
  @Input() body: string;

  isEmpty: boolean;

  constructor(
    public dialog: MatDialog,
    private noteService: NoteService,
    private router: Router
  ) {}

  openEditor(): void {
    const dialogRef = this.dialog.open(EditorComponent, {
      width: '1000px',
      data: { title: this.title, body: this.body },
    });

    const sub = dialogRef.componentInstance.onAdd.subscribe((data) => {
      console.log(data.title, data.body);
      this.title = data.title;
      this.body = data.body;
      this.checkIfEmpty();
    });

    dialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe();
      console.log(this.body);
    });
  }

  shareNote() {
    console.log(this.body);
    let notePath = '/note/' + this.id.toString(10);
    this.router.navigate([`${notePath}`]);
    console.log('Share', notePath);
  }

  deleteNote() {
    console.log('Delete');
    this.noteService.deleteNote(this.id);
  }

  checkIfEmpty() {
    if (this.title == '' && this.body == '') {
      this.isEmpty = true;
    } else {
      this.isEmpty = false;
    }
  }

  ngOnInit() {
    if (this.title == '' && this.body == '') {
      this.isEmpty = true;
    } else {
      this.isEmpty = false;
    }
  }
}
