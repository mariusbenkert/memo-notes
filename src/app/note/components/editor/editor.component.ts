import { Component, Inject, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from '../note';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent {
  // TODO: https://www.youtube.com/watch?v=Sk5jOAGl20o || Dialog Link
  // TODO: https://www.youtube.com/watch?v=yPKSpuso6K0 || Transition

  constructor(
    public dialogRef: MatDialogRef<EditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Note
  ) {}

  onAdd = new EventEmitter();

  update() {
    this.onAdd.emit(this.data);
  }
}
