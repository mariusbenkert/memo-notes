import { Component } from '@angular/core';

@Component({
  selector: 'app-navigationlist',
  templateUrl: './navigationlist.component.html',
  styleUrls: ['./navigationlist.component.css'],
})
export class NavigationlistComponent {
  navItems: {name: string, path: string}[] = [
    {
      name: 'login',
      path: '/login',
    },
    {
      name: 'signup',
      path: '/signup'
    }
  ];
}
