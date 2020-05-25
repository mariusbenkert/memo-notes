import { NoteserviceService } from './../note.service';
import { Note } from './../note';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noteslist',
  templateUrl: './noteslist.component.html',
  styleUrls: ['./noteslist.component.css'],
})
export class NoteslistComponent implements OnInit {
  notesList: Note[];

  constructor(private noteService: NoteserviceService) {}

  ngOnInit(): void {
    this.notesList = this.noteService.getAllNotes();
    console.log(this.notesList);
  }
}
