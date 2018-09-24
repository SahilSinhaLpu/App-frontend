import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {postsModel} from '../models/postsModel';
import { HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoreDataService {
  posts: string= "http://localhost:3000/posts";
  putUrl: string = "http://localhost:3000/posts/";
  constructor(private http: HttpClient) { }

  getPosts(): Observable<postsModel[]>{
    return this.http.get<postsModel[]>(this.posts);
  }

  addPosts(newPost: postsModel): Observable<postsModel>{
    let headerContent: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    );
    return this.http.post<postsModel>( this.putUrl, newPost, {headers: headerContent});
  }
}
