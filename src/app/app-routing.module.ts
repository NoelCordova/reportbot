import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ChampionComponent } from './components/champion/champion.component';
import { ChampionsComponent } from './components/champions/champions.component';
import { SummonerSearchComponent } from './components/summoner-search/summoner-search.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'summoner', component: SummonerSearchComponent },
  { path: 'champion/:id', component: ChampionComponent },
  { path: 'champions', component: ChampionsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
