import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {postsModel} from '../models/postsModel';

@Injectable({
  providedIn: 'root'
})
export class CoreDataService {
  posts: string= "http://localhost:3000/posts";
  constructor(private http: HttpClient) { }

  getPosts(): Observable<postsModel[]>{
    return this.http.get<postsModel[]>(this.posts);
  }
}
