import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home-page',
    loadChildren: () => import('./Pages/Home-Page/home-page.module').then(module => module.HomePageModule)
  },
  {
    path: 'heroes-page',
    loadChildren: () => import('./Pages/Heroes-Page/heroes-page.module').then(module => module.HeroesPageModule)
  },
  {
    path: '',
    redirectTo: 'home-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
