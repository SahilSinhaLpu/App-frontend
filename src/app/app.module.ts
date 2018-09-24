import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, 
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatTabsModule, 
    MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
