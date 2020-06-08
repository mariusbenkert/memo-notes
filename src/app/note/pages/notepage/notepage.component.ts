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
  // TODO: NotePage bekommt nicht die aktuellen Daten
  // BehaviourSubject in NoteService resettet sich bei ändern des Paths?

  _id: string;
  allNotes: Note[];
  relevantNote: Note;
  noteNotFound: boolean;

  constructor(private route: ActivatedRoute, private noteService: NoteService) {
    console.log('Constructor NotePage');
    this.noteService.notes$.subscribe((notes) => {
      this.allNotes = notes;
    });

    this.route.params.subscribe((params) => {
      this._id = params.id;
      // check if id exists in database
      // if true: display it
      // if false: note not found
    });

    this.relevantNote = this.allNotes.find((note) => {
      return note._id === this._id;
    });

    if (this.relevantNote === undefined) {
      this.noteNotFound = true;
    }

    console.log(this.relevantNote.content);
  }

  ngOnInit(): void {}
}
