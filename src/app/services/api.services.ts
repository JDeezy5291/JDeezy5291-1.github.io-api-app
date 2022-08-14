import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../classes/post';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private baseUrl = "https://jsonplaceholder.typicode.com/posts";

    constructor(private httpClient: HttpClient){}

    getPosts(): Observable<Array<Post>> {
        return this.httpClient.get<Array<Post>>(`${this.baseUrl}`)
    }
}