import { NoteserviceService } from './../note.service';
import { Note } from './../note';
import { Component, OnInit } from '@angular/core';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-noteslist',
  templateUrl: './noteslist.component.html',
  styleUrls: ['./noteslist.component.css'],
})
export class NoteslistComponent implements OnInit {
  notesList: Note[];

  constructor(private noteService: NoteserviceService) {}

  drop(event: CdkDragDrop<Note[]>) {
    console.log('Drag');
    moveItemInArray(this.notesList, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
    this.notesList = this.noteService.getAllNotes();
    console.log(this.notesList);
  }
}
