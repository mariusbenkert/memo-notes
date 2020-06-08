import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navigationlist',
  templateUrl: './navigationlist.component.html',
  styleUrls: ['./navigationlist.component.css'],
})
export class NavigationlistComponent implements OnInit, OnDestroy {
  navItems: { name: string; path: string; func?: () => void }[];
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;

      if (this.isAuthenticated) {
        this.navItems = [
          {
            name: 'login',
            path: '/login',
          },
          {
            name: 'signup',
            path: '/signup',
          },
        ];
      } else {
        this.navItems = [
          {
            name: 'your notes',
            path: '/editor',
          },
          {
            name: 'logout',
            path: '/',
            func: this.onLogout.bind(this),
          },
        ];
      }
    });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
