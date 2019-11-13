import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { TokenService } from '../Services/token.service';
import { UserService } from '../user.service';
import { error } from 'util';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  signedin = this.formbuilder.group({
    email: '',
    password: ''
  })

  constructor(
    private router: Router,
    private http: HttpClient,
    private formbuilder: FormBuilder,
    private Token: TokenService,
    private user: UserService,
    public toastController: ToastController
  ) { }




  async Signin(formData: any) {
    this.user.login(formData).subscribe(
      (res: any) => {
        if (res) {
          // console.log(res.data.token);
          localStorage.setItem('userData', res.data.token)
          this.router.navigate(['/main']);
        }
        
      },
      async (error) => {
        console.log('error occured:', error);
      
       if(error){
      const toast = await this.toastController.create({
       message: 'Invalid email or password',
       duration: 3000,
       color: 'danger',
       position: 'top'  
      });
      toast.present();
    }
      },
      
    )
   
  }
  
  logout(){
    localStorage.removeItem('userData');
    this.router.navigate(['/home']);
  }

  
}



