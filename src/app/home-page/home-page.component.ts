import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  test = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  mode= new FormControl('push');

}
