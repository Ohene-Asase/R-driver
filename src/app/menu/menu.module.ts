import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from "./menu.page";
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
{
  path: '',
  redirectTo: '/menu/main',
  pathMatch: 'full'
},



  {
    path: '',
    component: MenuPage,
    children: [
      { path: 'main', loadChildren: '../main/main.module#MainPageModule', canActivate:[AuthGuard] },
      { path: 'trip', loadChildren: '../trip/trip.module#TripPageModule' },
      { path: 'settings', loadChildren: '../settings/settings.module#SettingsPageModule' },
 
      
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
