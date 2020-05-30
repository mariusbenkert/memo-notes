import { NoteService } from './../../components/note.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Note } from '../../components/note';

@Component({
  selector: 'app-notepage',
  templateUrl: './notepage.component.html',
  styleUrls: ['./notepage.component.css'],
})
export class NotepageComponent implements OnInit {
  id: number;
  allNotes: Note[];
  relevantNote: Note;
  noteNotFound: boolean;

  constructor(private route: ActivatedRoute, private noteService: NoteService) {
    this.allNotes = this.noteService.notesListValue;

    this.route.params.subscribe((params) => {
      this.id = +params.id;
      // check if id exists in database
      // if true: display it
      // if false: note not found

      console.log('ID:', this.id);
    });

    console.log(this.allNotes);
    this.relevantNote = this.allNotes.find((note) => {
      return note.id === this.id;
    });

    if (this.relevantNote === undefined) {
      this.noteNotFound = true;
    }
    console.log(this.relevantNote);
  }

  ngOnInit(): void {}
}
