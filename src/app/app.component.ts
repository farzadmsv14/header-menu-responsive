import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isMobile = false;
  isDrawerOpen = false;
  isUserMenuOpen = false;

  user = {
    name: 'فرزاد موسوی',
    avatar: 'https://i.pravatar.cc/100?img=12',
  };

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth < 950;
    if (!this.isMobile) {
      this.isDrawerOpen = false;
    }
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  logout() {
    // عملیات خروج از حساب
    alert('خروج انجام شد!');
  }
}
