import { Injectable } from '@angular/core';
import { Note } from './note';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  notesList: Note[] = [
    { id: 1, title: 'Test1234', body: 'wfoinwifni' },
    { id: 2, title: 'Test5678', body: 'dwifniwnff' },
    { id: 3, title: 'Dominik stinkt', body: 'Danke fürs zuhören' },
    {
      id: 4,
      title: 'In der Bootsfahrschule',
      body: 'hab ich gelernt, dass...',
    },
    { id: 5, title: 'Ich bin so gut,', body: 'nicht mehr schön!!!' },
  ];

  // DAS HIER IST MIR NOCH NICHT SO GANZ SCHLÜSSIG //
  private notesListSubject = new BehaviorSubject<Note[]>(this.notesList);
  public notes$ = this.notesListSubject.asObservable();
  public notesListValue = this.notesListSubject.getValue();

  constructor() {}

  /* Bug */
  // wenn man gerade am note suchen ist und dann neue Notiz erstellt
  // werden wieder alle angezeigt

  addNote(note: Note) {
    this.notesListValue.push(note);
    this.notesListSubject.next(this.notesListValue);
  }

  updateNoteList(arr) {
    this.notesListSubject.next(arr);
  }
}
