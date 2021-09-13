import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {HeroService} from "../Services/hero.service";
import {IHero} from "../Models/hero";

@Injectable({
  providedIn: 'root'
})
export class HeroesListResolver implements Resolve<IHero[]> {
  constructor(private heroService: HeroService) {
  }

  resolve(): Observable<IHero[]> {
    return this.heroService.getHeroesList();
  }
}
