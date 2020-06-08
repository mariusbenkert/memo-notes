import { Injectable } from '@angular/core';
import { Note } from './note';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

interface NotesRespondData {
  message: string;
  notes: Array<Note>;
}

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  notesList: Note[] = [];

  private notesListSubject = new BehaviorSubject<Note[]>(this.notesList);
  public notes$ = this.notesListSubject.asObservable();
  public notesListValue = this.notesListSubject.getValue();

  private baseURL = 'http://localhost:5000/api/notes';

  constructor(public http: HttpClient) {}

  getNotes() {
    this.http
      .get<NotesRespondData>(this.baseURL + '/getNotes')
      .subscribe((respondData) => {
        console.log('Get notes Response: ', respondData);
        this.notesList = respondData.notes;
        this.notesListSubject.next(respondData.notes);
      });
  }

  addNote() {
    return this.http
      .put<any>(this.baseURL + '/create', {
        title: '',
        content: '',
      })
      .pipe(
        tap((responseData) => {
          this.notesList.push(responseData.note);
          this.notesListSubject.next(this.notesList);
        })
      );
  }

  updateNote(note: Note) {
    this.http
      .patch(this.baseURL + '/update', {
        title: note.title,
        content: note.content,
        noteId: note._id,
      })
      .subscribe((result) => {
        console.log(result);
      });
  }

  // updateNoteList(arr?) {
  //   if (arr) {
  //     this.notesListSubject.next(arr);
  //   } else {
  //     this.notesListSubject.next(this.notesList);
  //   }
  // }

  deleteNote(id: string) {
    this.http
      .delete(this.baseURL + '/delete/' + id)
      .subscribe((respondData) => {
        console.log(respondData);
      });

    const newNotesList = this.notesList.filter((note) => note._id !== id);
    console.log('Delete Notes:', newNotesList);
    this.notesListSubject.next(newNotesList);
  }
}
