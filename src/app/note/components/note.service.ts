import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable({
  providedIn: 'root',
})
export class NoteserviceService {
  notesList: Note[] = [
    { title: 'Test1234', body: 'wfoinwifni' },
    { title: 'Test5678', body: 'dwifniwnff' },
    { title: 'Dominik stinkt', body: 'Danke fürs zuhören' },
  ];

  constructor() {}

  getAllNotes() {
    return this.notesList;
  }
}
