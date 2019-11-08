import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Events } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  pages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Trip history',
      url: '/trip',
      icon: 'car'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    }
  ];
  SelectedPath = '';
  constructor(public events: Events, private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.SelectedPath = event.url;
    });
  }
}
