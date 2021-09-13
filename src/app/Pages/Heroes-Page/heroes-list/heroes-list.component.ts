import {Component, OnInit, ViewChild} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {IHero} from 'src/app/Models/hero';
import {MatDialog} from "@angular/material/dialog";
import {HeroDetailsComponent} from "../hero-details/hero-details.component";

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  heroesList: IHero[] = [];
  activityValues: number[] = [0, 4];

  constructor(private title: Title, private activatedRoute: ActivatedRoute, public dialog: MatDialog,) {
  }

  ngOnInit(): void {
    this.title.setTitle('(U.N.I.S.H.F) - Heros Page');
    this.getHeroesList();
  }

  getHeroesList(): void {
    this.activatedRoute.data.subscribe((res) => {
      this.heroesList = res.heroes;
    })
  }

  onShowHero(hero: IHero): void {
    this.dialog.open(HeroDetailsComponent, {
      data: hero,
      minWidth: '50vw',
      maxHeight: '80vh'
    });
  }
}
