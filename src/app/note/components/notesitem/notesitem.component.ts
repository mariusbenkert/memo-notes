import { EditorComponent } from './../editor/editor.component';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-notesitem',
  templateUrl: './notesitem.component.html',
  styleUrls: ['./notesitem.component.css'],
})
export class NotesitemComponent {
  @Input() title: string;
  @Input() body: string;

  constructor(public dialog: MatDialog) {}

  openEditor(): void {
    const dialogRef = this.dialog.open(EditorComponent, {
      width: '1000px',
      data: { title: this.title, body: this.body },
    });

    const sub = dialogRef.componentInstance.onAdd.subscribe((data) => {
      console.log(data.title, data.body);
      this.title = data.title;
      this.body = data.body;
    });

    dialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe();
    });
  }
}
