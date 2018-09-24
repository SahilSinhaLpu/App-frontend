import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CoreDataService} from '../app/services/core-data.service';
import {postsModel} from '../app/models/postsModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts:  postsModel[];

  constructor(private coreDataService: CoreDataService) {    
  }

  ngOnInit(): void{
    this.coreDataService.getPosts().subscribe(
      (data: postsModel[]) => this.posts= data,
      (err: any) => console.log(err),
      ()=> console.log("Done")
    );
  }


}
