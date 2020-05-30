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
  editorNote: Note;
  markedPosStart: number;
  markedPosEnd: number;
  markedString: string;

  constructor(
    public dialogRef: MatDialogRef<EditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Note
  ) {
    this.editorNote = { title: data.title, body: data.body };
  }

  onAdd = new EventEmitter();

  update() {
    this.onAdd.emit(this.editorNote);
  }

  getMarkedPosition(event) {
    this.markedPosStart = event.target.selectionStart;
    this.markedPosEnd = event.target.selectionEnd;
    this.markedString = event.target.value.substr(
      this.markedPosStart,
      this.markedPosEnd - this.markedPosStart
    );
  }

  // WHAT TO DO:
  // Wir haben: ganzer body string, staet und ende markierte stelle
  // Wir müssen: vor start und nach ende chars einfügen

  makeBold() {
    let boldString = '**';

    let newString = [
      this.editorNote.body.slice(0, this.markedPosStart),
      boldString,
      this.editorNote.body.slice(this.markedPosStart, this.markedPosEnd),
      boldString,
      this.editorNote.body.slice(this.markedPosEnd),
    ].join('');
    console.log(newString);
    this.editorNote.body = newString;
    this.update();
  }
}
