import { Component } from '@angular/core';

@Component({
  selector: 'value-chip-dialog',
  templateUrl: './value-chip-dialog.component.html',
  styleUrls: ['./value-chip-dialog.component.css']
})
export class ValueChipDialogComponent {

  onNoClick() {
    console.log('Close the modal, no save');
  }

  onConfirm() {
    console.log('Close the modal, save value chip');
  }


}
