import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-authentication-module',
  templateUrl: './authentication-module.component.html',
  styleUrls: ['./authentication-module.component.css']
})
export class AuthenticationModuleComponent implements OnInit {
  loginData= new FormGroup({
    emailId: new FormControl(''),
    password: new FormControl('')
  });

  signUpData= new FormGroup({
    profession: new FormControl(''),
    name: new FormControl(''),
    age: new FormControl(''),
    address: new FormControl(''),
    bloodGroup: new FormControl(''),
    password: new FormControl(''),
    phoneNumber: new FormControl('')
  });

  professionValue: String[];
  constructor() { 
    this.professionValue= ['Patient','Doctor', 'Staff'];
  }

  ngOnInit() {
  }

}
