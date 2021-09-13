import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {IHero} from "../Models/hero";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private httpClient: HttpClient) {
  }

  getHeroesList(): Observable<IHero[]> {
    return this.httpClient.get<IHero[]>('assets/JSON-Files/heroes-list.json');
  }
}
