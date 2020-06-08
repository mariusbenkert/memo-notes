import { NoteService } from './../note.service';
import { Component, OnInit } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  searchTerm: string;

  allNotes: Note[];
  matchedNotes: Set<Note> = new Set<Note>();

  constructor(private noteService: NoteService) {}

  searchForResults() {
    this.matchedNotes.clear();
    this.allNotes.forEach((note) => {
      if (
        note.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(this.searchTerm.toLowerCase())
      ) {
        this.matchedNotes.add(note);
      }
    });

    // this.noteService.updateNoteList(Array.from(this.matchedNotes));
  }

  ngOnInit(): void {
    this.allNotes = this.noteService.notesListValue;
  }
}
