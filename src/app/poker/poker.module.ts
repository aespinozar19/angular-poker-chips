import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipComponent } from './components/chip/chip.component';
import { ValueChipDialogComponent } from './components/value-chip-dialog/value-chip-dialog.component';

import { ChipImagePipe } from './pipes/chip-image.pipe';
import { ChipDealerPageComponent } from './pages/chip-dealer-page/chip-dealer-page.component';
import { PokerRoutingModule } from './poker-routing.module';



@NgModule({
  declarations: [
    ChipComponent,
    ValueChipDialogComponent,
    ChipImagePipe,
    ChipDealerPageComponent,
  ],
  imports: [
    CommonModule,
    PokerRoutingModule,

  ]
})
export class PokerModule { }
