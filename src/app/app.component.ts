import { Component, OnInit, OnChanges } from '@angular/core';
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

  addPosts= new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    author: new FormControl('')
  })

  constructor(private coreDataService: CoreDataService) {    
  }

  ngOnInit(): void{
    this.coreDataService.getPosts().subscribe(
      (data: postsModel[]) => this.posts= data,
      (err: any) => console.log(err),
      ()=> console.log("Done")
    );
  }


  addData(): void{
    console.log(this.addPosts.value);
    this.coreDataService.addPosts(this.addPosts.value).subscribe(
      (data: postsModel) => console.log(data),
      (err: any)=> console.log(err),
      ()=> console.log("Operation Carried Out")
    );
    this.ngOnInit();
  }

}
