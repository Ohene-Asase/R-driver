import { Component, OnInit } from '@angular/core';
import { ToastController, Events } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { Router, RouterEvent } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  show = false;
  requestForm = this.formBuilder.group({
    destination: '',
    date: '',
    reason: '',
    numberOfPeople: '',
    time: '',
  });

  constructor(public toastController: ToastController, public modalController: ModalController, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  //  async toast(){
  //    const toast = await this.toastController.create({
  //      message: 'Request successful',
  //      duration: 2000,
  //      color:'success',
  //      position: 'bottom'
  //    });
  //   toast.present();
  //  }
  //  async presentModal() {
  //    const modal = await this.modalController.create({
  //      component: ModalPage,
  //      cssClass: 'half-modal'
  //    });

  //  return await modal.present();

  requestDriver(requestDetails: any) {
    console.log(requestDetails);
    this.requestForm.reset();
  }

  toggle() {
    this.show = !this.show;
  }
}

