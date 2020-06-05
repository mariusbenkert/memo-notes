import { Injectable } from '@angular/core';
import { Note } from './note';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  notesList: Note[] = [
    { id: 1, title: '', body: '' },
    { id: 2, title: 'Test5678', body: 'dwifniwnff' },
    { id: 3, title: 'Dominik stinkt', body: 'Danke fürs zuhören' },
    {
      id: 4,
      title: 'In der Bootsfahrschule',
      body: 'hab ich gelernt, dass...',
    },
    { id: 5, title: 'Ich bin so gut,', body: 'nicht mehr schön!!!' },
  ];

  private notesListSubject = new BehaviorSubject<Note[]>(this.notesList);
  public notes$ = this.notesListSubject.asObservable();
  public notesListValue = this.notesListSubject.getValue();

  constructor(public http: HttpClient) {}

  getNotes() {
    this.http
      .get<any[]>('http://localhost:5000/api/notes/getNotes')
      .subscribe((notes) => {
        console.log(notes);
      });
    console.log('GET NOTES');
  }

  addNote(note: Note) {
    this.notesListValue.push(note);
    this.notesListSubject.next(this.notesListValue);
  }

  updateNoteList(arr) {
    this.notesListSubject.next(arr);
  }

  deleteNote(id: number) {
    let count = 0;
    let index: number;

    this.notesListValue.forEach((note) => {
      if (note.id === id) {
        index = count;
      }
      count++;
    });

    console.log(index);
    this.notesListValue.splice(index, 1);
    // this.notesListSubject.next(newArr);
  }
}
