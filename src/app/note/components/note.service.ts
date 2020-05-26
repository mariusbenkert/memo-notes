import { Injectable } from '@angular/core';
import { Note } from './note';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  notesList: Note[] = [
    { title: 'Test1234', body: 'wfoinwifni' },
    { title: 'Test5678', body: 'dwifniwnff' },
    { title: 'Dominik stinkt', body: 'Danke fürs zuhören' },
    { title: 'In der Bootsfahrschule', body: 'hab ich gelernt, dass...' },
    { title: 'Ich bin so gut,', body: 'nicht mehr schön!!!' },
  ];

  // DAS HIER IST MIR NOCH NICHT SO GANZ SCHLÜSSIG //
  private notesListSubject = new BehaviorSubject<Note[]>(this.notesList);
  public notes$ = this.notesListSubject.asObservable();
  public notesListValue = this.notesListSubject.getValue();

  constructor() {}

  getAllNotes(): Observable<Note[]> {
    return this.notes$;
  }

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
