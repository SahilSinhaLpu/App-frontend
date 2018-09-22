import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularReactiveForms';
  opened: boolean;
  test = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  mode= new FormControl('push');
}
