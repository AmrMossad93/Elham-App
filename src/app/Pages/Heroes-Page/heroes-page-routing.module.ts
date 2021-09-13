import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesListComponent} from "./heroes-list/heroes-list.component";
import {HeroesListResolver} from "../../Resolvers/heroes-list.resolver";

const routes: Routes = [
  {
    path: '',
    component: HeroesListComponent,
    resolve: {
      heroes: HeroesListResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesPageRoutingModule {
}
