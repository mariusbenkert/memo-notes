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
    this.editorNote = data;
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
    console.log('getMarkedPosition: ', this.markedPosStart, this.markedPosEnd);
  }

  // WHAT TO DO:
  // Wir haben: ganzer body string, staet und ende markierte stelle
  // Wir müssen: vor start und nach ende chars einfügen

  makeBold() {
    const boldString = '**';
    console.log(this.markedString);

    let newString;

    // console.log(
    //   'start: ',
    //   this.editorNote.body.slice(this.markedPosStart - 2, this.markedPosStart)
    // );
    // console.log(
    //   'end: ',
    //   this.editorNote.body.slice(this.markedPosEnd, this.markedPosEnd + 2),
    //   this.editorNote.body.slice(this.markedPosEnd, this.markedPosEnd + 2)
    //     .length
    // );

    if (this.checkIfMarked(boldString)) {
      const word = this.editorNote.content.slice(
        this.markedPosStart - 2,
        this.markedPosEnd + 2
      );
      const updatedWord = this.removeMarked(word, '*');
      console.log('updatedWord: ', updatedWord);
      const copyEditor = this.editorNote.content.slice();
      newString = `${copyEditor.slice(
        0,
        this.markedPosStart - 2
      )} ${updatedWord} ${copyEditor.slice(this.markedPosEnd + 2)}`;
    } else {
      // newString = [
      //   this.editorNote.body.slice(0, this.markedPosStart),
      //   boldString,
      //   this.editorNote.body.slice(this.markedPosStart, this.markedPosEnd),
      //   boldString,
      //   this.editorNote.body.slice(this.markedPosEnd),
      // ].join('');

      newString = `${this.editorNote.content.slice(
        0,
        this.markedPosStart
      )} ${boldString}${
        this.markedString
      }${boldString} ${this.editorNote.content.slice(this.markedPosEnd)}`;
    }

    console.log('newstring: ', newString);

    console.log('Position: ', this.markedPosStart, this.markedPosEnd);
    if (this.markedPosStart !== null && this.markedPosEnd !== null) {
      console.log('im in! updateing...');
      this.editorNote.content = newString;
      this.update();
    }

    this.markedPosStart = null;
    this.markedPosEnd = null;
  }

  checkIfMarked(s: string) {
    const start = this.editorNote.content.slice(
      this.markedPosStart - 2,
      this.markedPosStart
    );
    const end = this.editorNote.content.slice(
      this.markedPosEnd,
      this.markedPosEnd + 2
    );
    if (start === s && end === s) {
      return true;
    }
    return false;
  }

  removeMarked(word: string, patternChar: string): string {
    const newWord = word.split('');

    const result = newWord.filter((char) => {
      return char !== patternChar;
    });

    return result.join('');
  }
}
