import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';
import { ChipDealerPageComponent } from "./pages/chip-dealer-page/chip-dealer-page.component";

export const routes: Routes = [
  {
    path: '',
    component: ChipDealerPageComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokerRoutingModule{

}
