import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesPageRoutingModule } from './heroes-page-routing.module';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import {PrimeNgModule} from "../../Design-Modules/prime-ng.module";
import {FormsModule} from "@angular/forms";
import {AngularMaterialModule} from "../../Design-Modules/angular-material.module";
import { HeroDetailsComponent } from './hero-details/hero-details.component';


@NgModule({
  declarations: [
    HeroesListComponent,
    HeroDetailsComponent
  ],
  imports: [
    CommonModule,
    HeroesPageRoutingModule,
    PrimeNgModule,
    FormsModule,
    AngularMaterialModule
  ]
})
export class HeroesPageModule { }
