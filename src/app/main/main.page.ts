import { Component, OnInit } from '@angular/core';
import { ToastController, Events } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';

import * as moment from 'moment';
import { HomePage } from '../home/home.page';



@Component({
  selector: 'app-main',
  providers: [HomePage],
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  show = false;
get destination(){
  return this.requestForm.get('destination');
}

get reason(){
  return this.requestForm.get('reason');
}

get numberofPeople(){
  return this.requestForm.get('numberofPeople');
}

public errorMessages = {
  destination: [
    {type: 'required' , message: 'Destination is required'},
],

1: [
  {type: 'required' , message: 'Number of people '}
],

reason: [
  {type: 'required' , message: 'Reason is required'},
  {type1: 'required' , message: 'Number is required'}
  
],

okay: [
  {type: 'required' ,  message: 'Number required'}
]

};

  public minDate= moment().format();
    today = new Date()
    year = this.today.getFullYear()
    month = this.today.getMonth()
    day = this.today.getDate()
   time = this.today.getTime()
  formattedDate;
  



 requestForm = this.formBuilder.group({
    destination: new FormControl('', Validators.required),
    date:   new Date(this.year, this.month, this.day  ),
    reason: new FormControl('', Validators.required),
    numberOfPeople: new FormControl('',Validators.required),
    time: new Date(this.time), 
  });
  


  

  constructor(public toastController: ToastController, 
    public modalController: ModalController, 
    private formBuilder: FormBuilder,
    private home:HomePage,
    public alertCtrl: AlertController
    ) { }

  ngOnInit() {
  }

  


  async requestDriver(requestDetails: any) {
    console.log(requestDetails);
    this.requestForm.reset();
    const alert = await this.alertCtrl.create({
      header:'Alert',
      subHeader: 'Message',
      message: 'Request has been sent successfully',
      buttons: ['Ok']
    });
    await alert.present();
  }

  toggle() {
    this.show = !this.show;
  }


  

  logoutbtn(){
    this.home.logout()
  }
  


}



