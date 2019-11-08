import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalController: ModalController, private alertCtrl: AlertController) { }

  ngOnInit() {
  }
   async close(){
     await this.modalController.dismiss();

   }
   async sentAlert() {
    let alert = this.alertCtrl.create({
      header: 'Confirmation',
      subHeader: 'You have successfully scheduled for a car',
      buttons: ['Ok']
    });
     (await alert).present();

  }
}