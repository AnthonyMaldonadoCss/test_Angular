import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class JsonService {

  constructor(private hogwarts: HttpClient) { }

  /*public get(url: string) {
    return this.hogwarts.get(url);
  }*/

  getJson(url: string) {
    return this.hogwarts.get(url)
  }
}
