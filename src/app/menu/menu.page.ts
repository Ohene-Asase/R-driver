import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Events } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  navigate: any;
  ngOnInit(){
    this.sideMenu()
  }
  sideMenu()
  {
    this.navigate=
    [
     {
       title: 'Home',
       url: '/menu/main',
       icon: 'home'
     },
     {
       title: 'Trip history',
       url: '/menu/trip',
       icon: 'car'
     },
     {
       title: 'Settings',
       url: '/menu/settings',
       icon: 'settings'
     }
    ]
  
}
}
