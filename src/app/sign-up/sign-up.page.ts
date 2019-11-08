import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Response } from '@angular/http';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  // tobeposted: FormGroup;
  tobeposted = this.formBuilder.group({
    name: '',
    email: '',
    role: '',
    phone_no: '',
    password: '',
    department: ''
  });

  constructor(
    private router: Router,
    private toasterController: ToastController,
    private http: HttpClient,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  Register(formData: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('responseType', 'text')
      .set('Access-Control-Allow-Origin', '*')

    this.http.post("http://104.211.60.175/requestRide/public/api/register", JSON.stringify(formData), { headers: headers })
      .subscribe(
        res => {
          // this.router.navigate(['/home']);
          if(res) {console.log(res); this.router.navigate(['/home'])}
        })
  }
}