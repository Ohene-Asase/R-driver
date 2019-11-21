import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss'],
})
export class SideComponent implements OnInit {
  navigate: any;
 

  constructor() { }

  ngOnInit() {
    this.sideMenu
  }

   
sideMenu()
{
  this.navigate=
  [
   {
     title: 'Home',
     url: '/main',
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
  ]
  
}


}
