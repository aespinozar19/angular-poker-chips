import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'poker',
    loadChildren: () => import('./poker/poker.module').then( m => m.PokerModule),
  },
  {
    path: '**',
    redirectTo: 'poker',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
