import { Component, Input, OnInit } from '@angular/core';
import { Money, PokerChip } from '../../interfaces/poker-chip.interfaces';

@Component({
  selector: 'poker-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent implements OnInit {

  @Input()
  public chip!: PokerChip;

  // @Input()
  // public moneySimbol!: string;

  ngOnInit(): void {
    if ( !this.chip ) throw Error('Chip property is required!');
  }

  Choose( chip: PokerChip ){
    console.log( chip.color );
  }




}
