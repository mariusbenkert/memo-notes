import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigationitem',
  templateUrl: './navigationitem.component.html',
  styleUrls: ['./navigationitem.component.css'],
})
export class NavigationitemComponent implements OnInit {
  @Input() path: string;
  @Input() func: () => void;

  constructor() {}

  ngOnInit(): void {}
}
